import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = () => {
  return (
    <TypeAnimation
        sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sushi !!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Vada Pav !!',
        1000,
        'Biryani !!',
        1000,
        'Cheese Burger !',
        1000,
        'Cheese Cake !!',
        1000,
        'Pav Bhaji !!',
        1000,
        'Chole Bhature !',
        1000,
        'Chole Kulche !!',
        1000,
        'Ice Cream !!',
        1000,
        'Masala Dosa !!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypeWriter