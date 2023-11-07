import { Link, Outlet, useLoaderData, useMatch } from 'react-router-dom'
import { posts, Post } from '../mockData'


export const loader = async () => {
  // fetch from api to get all posts
  // sorted in some featured or most recent way
  // later with search 
  return posts
}


export default function Questions() {
  const posts = useLoaderData() as Post[]
  const match = useMatch('/qeustions')
  console.log(match)

  return (
    <div className='flex gap-4'>

      <div className={match ? 'w-full' : 'w-1/2'}>
        <div className='bg-gray-100 p-2 space-y-2'>
          {posts.map((post) => (
            <div className='bg-gray-200 p-2' key={post.id}>
              <h3 className='font-semibold'>{post.title}</h3>
              <p>{post.content}</p>
              <p className='text-right'><Link to={`${post.id}`}>Read more</Link></p>
            </div>
          ))}
        </div>
      </div>

      <div className={match ? 'w-0 hidden' : 'w-1/2'}>
        <Outlet />
      </div>

    </div>
  )
}
