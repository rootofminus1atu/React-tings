import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import { User, users } from "../mockData"

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.userId

  const user = users.find(u => `${u.id}` === id)

  if (!user) {
    throw new Error("No user with this id")
  }

  return user
}

export default function SingleUser() {
  const user = useLoaderData() as User

  return (
    <div>
      <h1 className="text-xl">Hello I am {user.username}</h1>
      <p>description of my profile</p>
    </div>
  )
}
