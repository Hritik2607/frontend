import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='relative group max-w-[200px] bg-grey-cardbg rounded-lg shadow-[2px_2px_15px_rgba(0,0,0,0.25)]'>
        <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2'><img src={props.img} alt='Customer Image' /></div>
        <div className='flex flex-col items-center justify-between font-sourcecodepro gap-1'>
            <p className='font-medium leading-normal text-lg text-center text-black2 mx-7 mt-7'>{props.name}</p>
            <p className='font-normal leading-normal text-sm text-center text-grey-text px-1'>{props.message}</p>
            <div className='mb-2 group-hover:scale-125 transition-all duration-500'><img src={props.rate} alt='Review stars' /></div>
        </div>
    </div>
  )
}

export default ReviewCard