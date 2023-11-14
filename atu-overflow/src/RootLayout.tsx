import { useState, createContext, type Context, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export function useSafeContext<T>(Context: Context<T | undefined>) {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error("Context Provider not found")
  }

  return context as T
}


interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

function RootLayout() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  console.log(isLoggedIn)


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className='max-w-4xl mx-auto'>
        <Header />
        <div className='p-8'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default RootLayout
