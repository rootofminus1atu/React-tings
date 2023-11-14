import { Link } from 'react-router-dom'
import { AuthContext, useSafeContext } from '../RootLayout'

export default function Header() {
  const { isLoggedIn } = useSafeContext(AuthContext)

  return (
    <header className='flex items-center justify-between p-4 bg-gray-200'>
      <div className='flex items-center gap-6'>
        <div className='text-3xl'>Logo</div>
        <nav>
          <ul className='flex flex-row gap-3'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/questions"}>Questions</Link></li>
            <li><Link to={"/ask"}>Ask</Link></li>
            <li><Link to={"/users"}>Users</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        {isLoggedIn ? (
          <div>
            <p>hello username</p>
            <Link to={"/login"} className='text-red-600'>Logout</Link>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className='text-sky-600'>Login</Link>
          </div>
        )}
      </div>
      
      
    </header>
  )
}
