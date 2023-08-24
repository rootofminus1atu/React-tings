import { useState, useRef } from 'react'

function App() {
  const [display, setDisplay] = useState('')
  const inputRef = useRef(null)

  const handleDownload = () => {
    const videoUrl = inputRef.current.value;
    // You should validate the URL and handle the download appropriately
    // For simplicity, let's assume the URL is valid and the video can be downloaded.

    // Extract the video file name from the URL
    const fileName = videoUrl.substring(videoUrl.lastIndexOf('/') + 1);

    // Create a link to the video and simulate a click to download it
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = fileName;
    link.click();

    setDisplay(`Downloading video: ${fileName}`);
  };

  return (
    <>
      <input type="text"
        ref={inputRef}
      />
      <button
        onClick={handleDownload}
      >
        Download
      </button>
      <p>{display}</p>
    </>
  )
}

export default App
