import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getClubWithId } from '../clubs'
import { getImgUrl } from '../helpers'

export async function loader({ params }) {
  const club = getClubWithId(params.clubId)
  return club
}

export default function ClubDetails() {
  const club = useLoaderData()

  return (
    <div className="page-group">
      <div className="content-group">
        <h1>{club.name}</h1>
        <p>{club.description}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas animi assumenda ex ratione cum odio officia reiciendis molestiae, in debitis corporis dolores! Odit suscipit sit animi porro. Voluptatibus quae quaerat perferendis molestias! Iste magnam, nobis temporibus corporis rerum ratione provident corrupti delectus consequatur doloribus architecto iure qui assumenda eius. Sunt similique reiciendis repellat excepturi! Porro fuga nam eius facilis exercitationem necessitatibus tempora corrupti deleniti alias, itaque odio consequatur in delectus non sequi eligendi unde perferendis eum officia aliquam dolores illo autem natus! Odio soluta obcaecati quis. Quo in aperiam delectus mollitia laboriosam! Amet necessitatibus totam ex provident repudiandae adipisci.</p>
        <img src={getImgUrl(club.img)} alt={`${club.name} image`} className="img-fluid" />
        <p>our leader</p>
      </div>
      
      <div className="content-group">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iste corporis quos ab corrupti fugit optio debitis est vero eligendi atque aperiam sit, ipsam reprehenderit ea asperiores ratione, rerum animi voluptas quod. Praesentium commodi odit repellat sed numquam, ab harum voluptatibus sapiente modi! Cum earum asperiores expedita eaque. Voluptates qui distinctio optio odit nesciunt hic nostrum vitae provident magnam impedit maiores possimus quasi, ad architecto quisquam! Hic, aut sit. Incidunt reiciendis eveniet numquam quis iste corrupti vitae suscipit minus minima?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex iusto corporis corrupti incidunt deleniti eligendi quia, labore, unde rem qui ad voluptatem animi excepturi in consequatur tenetur necessitatibus sunt aliquam doloremque velit alias. Dolor quidem incidunt rerum omnis libero, non cum obcaecati, aut placeat iste reprehenderit ut eligendi assumenda. Neque, debitis. A unde inventore consectetur vel veritatis recusandae labore tenetur repellat quibusdam tempore molestiae dolor, dolorem temporibus maiores enim expedita?</p>
      </div>
    </div>
  )
}
