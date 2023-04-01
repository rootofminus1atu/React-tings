import { useEffect, useState, useRef } from "react"

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false)

  /*
  useEffect(() => {
    document.title = `${dropdown} dropdown`
  }, [dropdown])
  */

  const ref = useRef()
  
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) { 
        setDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
  }, [dropdown])

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Hey <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={() => setDropdown(prev => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}