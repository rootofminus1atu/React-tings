import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { posts, Post, comments, Comment } from '../mockData'
import { BiLike, BiDislike } from 'react-icons/bi'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // replace with api and db thing
  const post = posts.find(p => `${p.id}` === params.questionId)
  // yeah

  if (!post) {
    throw new Error("NO POST FOUND")
  }

  const postComments = comments.filter(c => c.post.id === post.id)

  return { post, postComments }
}

export default function SingleQuestion() {
  const { post, postComments } = useLoaderData() as {
    post: Post;
    postComments: Comment[];
  };

  return (
    <div className='flex-1 bg-gray-100 p-2 space-y-2'>
      <div className='bg-gray-200 p-2'>
        <h2 className='font-bold text-2xl'>{post.title} by {post.author.username}</h2>
        <p>{post.content}</p>
        <div className='flex flex-row'>
          <BiLike />
          <p>{post.likes.length}</p>

          <BiDislike />
          <p>{post.dislikes.length}</p>
        </div>
      </div>
      
      <div className='space-y-2'>
        Comments:
        {
          postComments.map((comment) => (
            <div className='bg-gray-200 p-2'>
              <p>{comment.content}</p>
              <div className='flex flex-row'>
                <BiLike />
                <p>{comment.likes.length}</p>
                <BiDislike />
                <p>{comment.dislikes.length}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
