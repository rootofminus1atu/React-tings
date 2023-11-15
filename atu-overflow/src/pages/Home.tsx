import { db } from "../prismaClient"


export default function Home() {
  return (
    <div className='bg-red-200 text-bold'>
      <h1 className="text-bold text-2xl">Home</h1>
      <button onClick={async () => {
        const res = await fetch("http://127.0.0.1:8000/greeting")
        const stuff = await res.json()
        console.log(stuff)
      }}>
        click this
      </button>

      <button onClick={async () => {
        const posts = await db.post.findMany({})
        console.log(posts)
      }}>
        db stuff
      </button>

      <p>description of page Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, molestias.</p>
    </div>
  )
}
