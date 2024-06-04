import React from 'react'
import bookingSuccessfulImage from './../assets/bookingSuccessfulImage.png'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';

const BookingSuccessful = () => {

  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-col items-center justify-between gap-8 py-14 pb-20 mt-16'>

        {/* Image */}
        <div>
            <img src={bookingSuccessfulImage} alt='Booking Successful' height={350} width={550} />
        </div>

        {/* Text */}
        <div className='flex flex-col items-center gap-4'>
            <p className='text-black3 font-noticia text-5xl font-normal'>Booking Done Successfully</p>

            {/* email,
            bookingId,
            date: formattedDate,
            time,
            tableNumber */}

            { 
              location.state.response !== null 
              ? <div className='font-notomusic text-2xl'>
                <p>Booking Id :   <strong>{location.state.response.bookingId}</strong></p>
                <p>Date :   <strong>{location.state.response.date}</strong></p>
                <p>Time :   <strong>{location.state.response.time}</strong></p>
                <p>No. of Guests :   <strong>{location.state.response.noOfGuests}</strong></p>
                <p>Table Number :   <strong>0{location.state.response.tableNumber}</strong></p>
              </div> 
              : ""
            } 

            {
              location !== null
              ?  <p className='text-grey-text font-notomusic text-lg font-normal text-center'>Confirmation mail has been sent to <strong>{location.state.response.email}</strong>. <br /> Thank you.</p>
              : <p className='text-grey-text font-notomusic text-lg font-normal text-center'>Confirmation mail has been sent to your given email. <br /> Thank you.</p>
            }
        </div>

        {/* Back to Home Button */}
        <Link to="/">
            <button className='inline-flex px-8 py-3 bg-orange-solid2 rounded-3xl text-white text-2xl font-nunito font-bold'>Back to Home</button>
        </Link>
    </div>
    </div>
    
  )
}

export default BookingSuccessful