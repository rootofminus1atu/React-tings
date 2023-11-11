import { Form, Link, LoaderFunctionArgs, Outlet, redirect, useLoaderData } from 'react-router-dom'
import { posts as allPosts, Post } from '../mockData'


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const q = url.searchParams.get("q")
  
  // api call, search filter thing
  const posts = allPosts.filter(p => p.title.includes(q || ""))


  return posts
}


export default function Questions() {
  const posts = useLoaderData() as Post[]

  return (
    <div className='flex flex-row gap-4'>

      <div className='flex-1'>
        <Form id="search-form" role="search">
          <input 
            id="q"
            name="q"
            type="search" 
            placeholder='search'
            className='border border-sky-300 p-1'
          />
        </Form>

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

      <Outlet />

    </div>
  )
}
