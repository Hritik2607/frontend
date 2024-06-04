import React, { useState } from 'react'
import Banner from './../assets/Banner.png'
import UnderLine from './../assets/Customer Review Underline.png'
import Category from '../components/Order Online/Category'
import ItemsList from '../components/Order Online/ItemsList'
import FoodData from './../data/FoodData.json'
import Navbar from '../components/Navbar'

const OrderOnline = () => {

  const [foodData, setFoodData] = useState(FoodData);
  const [category, setCategory] = useState("All");

  const filterItem = (cat) => {
    const newFoodData = FoodData.filter((newVal) => newVal.category === cat)
    setFoodData(newFoodData);
    setCategory(cat);
  }

  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-col justify-center item-center mt-16'>

        {/* Banner  */}
        <div>
            <img src={Banner} alt='Order Online Banner' loading='lazy' className='w-full' />
        </div>

        {/* Category  */}
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='relative'>
                <p className='font-nokora text-4xl font-black' >Categories</p>
                <img src={UnderLine} alt='Underline' width={190} height={38} loading='lazy' className='absolute top-5 -z-10' />
            </div>

            <Category filterItem={filterItem} category={category} setFoodData={setFoodData} setCategory={setCategory} />

            <ItemsList foodData={foodData} />

            
        </div>
        
    </div>
    </div>
    
  )
}

export default OrderOnline