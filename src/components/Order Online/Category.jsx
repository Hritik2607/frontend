import React, { useState } from 'react'
import categoryData from './../../data/Category.json'
import FoodData from './../../data/FoodData.json'

const Category = ({filterItem, category, setFoodData, setCategory}) => {

  return (
        <div className='flex flex-wrap justify-center items-center gap-4 md:gap-16 mt-10 px-2'>
            {
                categoryData.map((cat) => (
                    <button
                    key={category.id}
                    className={`w-[80px] md:w-[100px] h-[60px] md:h-[120px] flex flex-col items-center justify-center gap-3 rounded-2xl md:rounded-3xl border-2 ${cat.category===category ? "border-orange-solid" : "border-grey-border" } hover:scale-95 transition-all duration-300`}
                    onClick={cat.category==="All" ? () =>{setFoodData(FoodData); setCategory("All")} : () =>filterItem(cat.category)}
                    >
                        <img src={cat.categoryImg} alt='Category Icon' className='h-5 md:h-10 w-5 md:w-10' />
                        
                        <p className='font-nokora text-xs md:text-sm font-semibold md:font-extrabold'>{cat.category}</p>
                    </button>
                ))
            }
        </div>
  )
}

export default Category