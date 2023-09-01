#[macro_use] extern crate rocket;

use rocket::fairing::{Fairing, Info, Kind};
use rocket::fs::NamedFile;
use rocket::http::{Header, Status};
use rocket::response::Redirect;
use rocket::response::status::Custom;
use rocket::http::uri::Origin;
use rocket::State;
use rocket::{Request, Response};

use rocket::serde::{Serialize, Deserialize, json::{Json, json, Value}};

use reqwest::Client;

use url::Url;
use rustube::{Video, Stream};

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[derive(Debug)]
#[derive(Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
struct Message {
    message: String
}

#[get("/get-message")]
fn get_message() -> Json<Message> {
    Json(Message {
        message: "Hello, world!".to_string()
    })
}



const TAURI_RELEASES: Origin<'static> = uri!("/tauri-releases");
const GOOGLE_KEEP_DESKTOP_REPO: &str = "elibroftw/google-keep-desktop-app";


fn create_tauri_response(github_release: &Value) -> Option<Value> {
    let response = json!({
        "version": github_release["tag_name"].as_str()?,
        "notes": github_release["body"].as_str()?,
        "pub_date": github_release["published_at"].as_str()?,
        "platforms": {}
    });
    Some(response)
}


async fn get_latest_release(client: &State<Client>, repo: &str) -> Result<Value, reqwest::Error> {
    let url = format!("https://api.github.com/repos/{}/releases/latest", repo);
    let response = client.get(&url).send().await?;
    let github_response = response.json::<Value>().await?;

    create_tauri_response(&github_response).ok_or(json!({})).or_else(|e| Ok(e))
}

#[get("/google-keep-desktop/<_platform>/<_current_version>?<msg>")]
async fn google_keep_desktop(_platform: &str, _current_version: &str, msg: Option<&str>, client: &State<Client>) -> Result<Value, Status> {
    if let Some(msg) = msg {
        println!("msg: {}", msg);
        return Err(Status::NoContent);
    }

    get_latest_release(client, GOOGLE_KEEP_DESKTOP_REPO)
        .await
        .or(Err(Status::NoContent))
}

#[get("/home")]
fn home() -> Redirect {
    let msg: Option<&str> = Some("Hello, world!");
    Redirect::to(uri!(TAURI_RELEASES, google_keep_desktop("linux", "0.1.0", msg)))
}











const API_PREFIX: Origin<'static> = uri!("/api");

async fn get_vid_from_url_str(url: &str) -> Result<Video, Box<dyn std::error::Error>> {
    let url: Url = Url::parse(url)?;
    let video = Video::from_url(&url).await?;
    
    Ok(video)
}

fn get_valid_streams_for_vid(video: &Video) -> Vec<Stream> {
    let streams: Vec<Stream> = video
        .streams()
        .iter()
        .filter(|s| s.includes_audio_track && s.includes_video_track)
        .cloned()  // Clone the Stream instances
        .collect();
    
    streams
}

async fn get_streams_for_url(url: Url) -> Result<Vec<Stream>, Box<dyn std::error::Error>> {
    let video = Video::from_url(&url).await?;
    let streams = get_valid_streams_for_vid(&video);

    Ok(streams)
}


#[get("/qualities?<url>")]
async fn qualities(url: &str) -> Custom<Value> {
    // Check if the URL is empty
    if url.is_empty() {
        return Custom(
            Status::BadRequest,
            json!({"error": "Empty URL provided"}),
        );
    }

    // Try to parse the URL
    let url: Url = match Url::parse(url) {
        Ok(url) => url,
        Err(e) => {
            return Custom(
                Status::BadRequest,
                json!({"error": format!("Invalid URL provided: {}", e)}),
            );
        }
    };

    let streams = match get_streams_for_url(url).await {
        Ok(streams) => streams,
        Err(e) => {
            println!("Error: {}", e);
            return Custom(
                Status::InternalServerError,
                json!({"error": format!("Error getting streams: {}", e)}),
            );
        }
    };

    // response finally
    Custom(Status::Ok, json!({"message": "Success", "streams": streams}))

}

const DOWNLOADS_DIR: &str = "./downloads";
use std::path::Path;

#[post("/download-stream", data = "<stream>")]
async fn download_stream(stream: Json<Stream>) -> Option<NamedFile> {
    let vid_name = &stream.video_details.video_id;
    let vid_file_name = format!("{}.mp4", vid_name); // include .mp4 extension
    let vid_path = Path::new(DOWNLOADS_DIR).join(vid_file_name);

    println!("Video path: {}", vid_path.display());

    if vid_path.exists() {
        println!("Video file already exists: {}", vid_path.display());
        return NamedFile::open(vid_path).await.ok();
    }

    println!("Video file does not exist: {}", vid_path.display());

    if let Err(e) = stream.download_to_dir(DOWNLOADS_DIR).await {
        println!("Error downloading stream: {}", e);
        return None;
    }

    NamedFile::open(vid_path).await.ok()
}


#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Cors)
        .manage(
            reqwest::Client::builder()
                .user_agent("reqwest")
                .build()
                .unwrap()
        )
        .mount("/", routes![index, get_message, home])
        .mount(API_PREFIX, routes![qualities, download_stream])
        .mount(TAURI_RELEASES, routes![google_keep_desktop])
}

pub struct Cors;

#[rocket::async_trait]
impl Fairing for Cors {
    fn info(&self) -> Info {
        Info {
            name: "Cross-Origin-Resource-Sharing Fairing",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, PATCH, PUT, DELETE, HEAD, OPTIONS, GET",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}