import React, { useState, useEffect } from "react";

const Player = ({ url }) => {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (listening) {
        // Play audio file
        const audio = new Audio(url);
        audio.play();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [listening, url]);

  return (
    <div>
      <button 
        onClick={() => {setListening(prev => !prev)}}
      >
        {listening ? "Listening" : "Press to listen"}
      </button>
    </div>
  );
};

export default Player;

const useAudio = url => {
  console.log(url)
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};