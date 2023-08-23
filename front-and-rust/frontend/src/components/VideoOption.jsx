import React from 'react'

export const VideoOption = ({ option }) => {
  return (
    <div>
      <button>
        <h2>{option.quality_label}</h2>
        <p>Download</p>
      </button>
    </div>
  )
}
