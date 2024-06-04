import React from 'react'
import BookingImage from './../assets/BookingImage.png'
import BookingTableForm from './../components/Book Table/BookTableForm'
import Navbar from '../components/Navbar'

const BookTable = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full flex justify-center md:justify-between md:px-16 item-center py-10 pb-16 mt-16'>

        {/* Booking Side Image */}
        <div className='hidden md:block mt-[5%] ml-[0%]'>
            <img src={BookingImage} alt='Booking Side' loading='lazy' />
        </div>

        {/* Booking Form */}
        <div>
            <BookingTableForm />
        </div>
    </div>
    </div>
    
  )
}

export default BookTable

// bg-gradient-to-b from-[#ff57330a] to-[#ffffff00]