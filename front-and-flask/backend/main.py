from flask import Flask, request, Response
from io import BytesIO
from pytube import YouTube

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return "Hello, World!"

@app.route("/api/download_video", methods=["GET"])
def download_video():
    video_url = request.args.get("video_url")
    
    if not video_url:
        return "Please provide a 'video_url' query parameter.", 400
    
    try:
        print(f"Downloading video from {video_url}...")
        yt = YouTube(video_url)
        print(f"yt: {yt}")
        video_stream = yt.streams.get_highest_resolution()

        print(f"video_stream: {video_stream}")

        video_data = BytesIO()
        video_stream.stream_to_buffer(video_data)
        video_bytes = video_data.getvalue()

        return Response(video_bytes, content_type="video/mp4")

    except Exception as e:
        return f"Error: {str(e)}", 500

if __name__ == "__main__":
    app.run()