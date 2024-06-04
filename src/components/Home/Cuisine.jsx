import React from 'react'

const Cuisine = (props) => {
  return (
    <div className='flex flex-col items-center mx-auto justify-center gap-2 md:gap-5 hover:scale-110 transition-all duration-500 cursor-pointer'>
        <img src={props.img} alt={props.name} width="150px" height="150px" className='rounded-full shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]' />
        <p className='text-center font-sora text-2xl drop-shadow'>{props.name}</p>
    </div>
  )
}

export default Cuisine