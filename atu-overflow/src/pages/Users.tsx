import { Link, useLoaderData } from "react-router-dom"
import { User, users as allUsers } from "../mockData"

export const loader = async () => {
  // get form gb
  const users = allUsers

  return users
}

export default function Users() {
  const users = useLoaderData() as User[]

  return (
    <div>
      {
        users.map((user) => (
          <div>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}
