import { Form, redirect } from 'react-router-dom'
import { AuthContext } from '../RootLayout'
import { useSafeContext } from '../hooks/hooks'


export const action = async () => {
  console.log("logging in")

  return redirect('/')
}


export default function LoginPage() {
  const { isLoggedIn, login, logout } = useSafeContext(AuthContext)

  if (isLoggedIn) return (
    <div className='bg-gray-100 p-2'>
      <h2>you are already logged in</h2>
      <Form method="post">
        <button 
          type="submit" 
          className='border border-red-600 p-2 m-2'
          onClick={logout}
        >
          Logout
        </button>
      </Form>
    </div>
  )

  return (
    <div className='bg-gray-100 p-2'>
      <Form method='post'>
        <label htmlFor="email">
          email
          <input type="email" name="email" />
        </label>

        <label htmlFor="password">
          password
          <input type="password" name="password" />
        </label>

        <button 
          type="submit" 
          className='border border-sky-400 p-2 m-2'
          onClick={login}
        >
          Login
        </button>
      </Form>
    </div>
  )
}
