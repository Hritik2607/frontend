import React from 'react'


const Chef = (props) => {
  return (
    <div className='relative font-sofiasans font-normal text-3xl group'>
        <img src={props.img} alt={props.name} loading='lazy' className='group-hover:scale-110 transition-all duration-300'  />
        <div className='flex gap-6 -rotate-90 absolute top-[6.5rem] -left-[6.5rem]'>
            <div className='-rotate-90 h-[35px] w-[3px] bg-black'></div>
            <p>{props.name}</p>
            {/* <p className='absolute -rotate-90 top-[6rem] -left-[6rem] font-sofiasans font-normal text-3xl'>{props.name}</p>
            <div className='absolute -left-6 top-[12rem] h-[35px] w-[3px] bg-black'></div> */}
        </div>
        <div className='flex items-center gap-2 absolute translate-x-1/4 -bottom-16'>
            <div className='h-[50px] w-[5px] bg-yellow-solid'></div>
            <p className='text-2xl md:text-3xl'>{props.title}</p>

            {/* <p className='absolute text-center font-sofiasans font-normal text-3xl'>{props.title}</p>
            <div className='absolute left-4 h-[50px] w-[5px] bg-yellow-solid'></div> */}
        </div>
    </div>
  )
}

export default Chef