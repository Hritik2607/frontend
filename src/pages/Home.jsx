import React from 'react'
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-col justify-center item-center mt-16'>
        
        <Section1 />
        <Section2 />
        <Section3 />
        
      </div>
    </div>
  )
}

export default Home;