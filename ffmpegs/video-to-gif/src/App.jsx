import { useEffect, useState } from 'react'
import './App.css'

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
const ffmpeg = createFFmpeg({ log: true })

function App() {
  const [ready, setReady] = useState(false)
  const [video, setVideo] = useState()
  const [gif, setGif] = useState()

  const load = async () => {
    await ffmpeg.load()
    setReady(true)
  }

  useEffect(() => {
    load()
  }, [])

  const convertToGif = async () => {
    ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video))

    await ffmpeg.run('-i', 'test.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'out.gif')

    const data = ffmpeg.FS('readFile', 'out.gif')

    const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }))
    setGif(url)
  }



  if (!ready) {
    return <h1>Loading...</h1>
  } 

  return (
    <>
      {
        video &&
        <video 
          controls
          width="250"
          src={URL.createObjectURL(video)}
        ></video>
      }
      <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
      <h3>Result</h3>
      <button onClick={convertToGif}>Convert to gif!</button>
      {
        gif &&
        <img src={gif} width="250" />
      }
    </>
  )
}

export default App
