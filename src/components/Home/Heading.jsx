import React from 'react'

const Heading = (props) => {
  return (
    <div className='font-noticia text-4xl md:text-6xl text-center'>
        {props.text}
    </div>
  )
}

export default Heading