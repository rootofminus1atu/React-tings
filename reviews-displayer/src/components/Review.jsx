import React from 'react'

export default function Review({reviews, index}) {
  const {id, name, job, image, text} = reviews[index]

  return (
    <article className='flex flex-col justify-center items-center text-center'>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-sky-400 transform translate-x-1 translate-y-1 z-0"></div>
        <img 
          src={image} 
          alt={name} 
          className="relative w-24 h-24 rounded-full object-cover z-10"
        />
      </div>
      <h4 className='font-bold mt-2'>{name}</h4>
      <p className='text-sky-600 uppercase text-sm'>{job}</p>
      <p>{text}</p>
    </article>
  )
}
