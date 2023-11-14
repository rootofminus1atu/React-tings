import { Link, useLoaderData } from "react-router-dom"
import { User, users as allUsers } from "../mockData"

export const loader = async () => {
  // get form db
  const users = allUsers

  return users
}

export default function Users() {
  const users = useLoaderData() as User[]

  return (
    <div className="bg-gray-100 p-2 space-y-2">
      {
        users.map((user) => (
          <div key={user.id} className="bg-gray-200 p-2">
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <Link to={`${user.id}`} >see  user</Link>
          </div>
        ))
      }
    </div>
  )
}
