import React from 'react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Review from './Review'
import reviews from './data'
import '../App.css'

export default function ReviewCard() {
  const [index, setIndex] = useState(2)
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleIndexUpdate = (increment) => {
    setIndex(prevIndex => {
      let newIndex = prevIndex + increment
      return (newIndex + reviews.length ) % reviews.length
    })
  }

  return (
    <section 
      className='review-card bg-slate-100 p-8 rounded-lg drop-shadow-xl
        flex flex-col justify-center items-center text-center'
    >
      <Review reviews={reviews} index={index}/>
      <div className='text-sky-600 text-2xl'>
        <button 
          className="p-4"
          onClick={() => handleIndexUpdate(-1)}
        >
          <FaChevronLeft />
        </button>
        <button 
          className="p-4"
          onClick={() => handleIndexUpdate(1)}
        >
          <FaChevronRight />
        </button>
      </div>
      
      <button 
        className={`bg-blue-200 text-sky-600 rounded px-2 py-1 transition duration-300 ease-out transform hover:scale-110 
          ${buttonClicked ? 'brightness-110' : ''}`}
        onClick={() => {
          const rnd = Math.floor(Math.random() * (reviews.length - 1) + 1)
          handleIndexUpdate(rnd)
          setButtonClicked(true)
          setTimeout(() => setButtonClicked(false), 100)
        }}
      >
        Surprise me
      </button>
    </section>
  )
}
