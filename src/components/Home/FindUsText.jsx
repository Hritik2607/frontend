import React from 'react'

const FindUsText = (props) => {
  return (
    <div className={`flex flex-col ${props.heading ? "mt-4 md:mt-8" : ""}`}>
        <p className='font-alegreya font-bold text-2xl md:text-3xl leading-normal text-pink-solid text-center'>{props.heading}</p>
        <div className='flex font-notosans leading-normal text-lg md:text-xl gap-1 justify-center'>
            <p className='font-semibold'>{props.boldtext}</p>
            <p className='font-normal text-center'>{props.text}</p>
        </div>
    </div>
  )
}

export default FindUsText