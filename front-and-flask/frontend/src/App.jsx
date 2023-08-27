import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState(null)
  const inputRef = useRef(null)

  const downloadVid = async () => {
    try {
      const urlol = inputRef.current.value.trim()

      if (!urlol) {
        return
      }

      console.log("urlol: ", urlol)

      const response = await fetch(`/api/download_video?video_url=${urlol}`)

      console.log(response)

      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`)
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      setUrl(url)

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <h1>Download Video</h1>
      <input type="text" placeholder="Video URL" ref={inputRef} />
      <button onClick={downloadVid}>press me</button>
      {url && <a href={url} download="video.mp4">Download Video</a>}
    </>
  )
}

export default App
