import React, { useState } from 'react'

const Item = ({item}) => {
    const [addedItem, setAddedItem] = useState([item]);

    const addToCart = (item) => {
        // const newFoodData = FoodData.filter((newVal) => newVal.category === cat)
        setAddedItem([...addedItem, item]);
        console.log(item);
        console.log(addedItem)
      }

  return (
    <div className='w-[200px] rounded-lg relative shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-300'>
        <div>
            <img src={item.image} alt="item" loading='lazy' className='rounded-[10px]' />
        </div>

        <div className='flex justify-between items-center px-2 pt-2'>
            <div>
                <p className='font-nokora text-sm font-bold'>{item.name}</p>
                <p className='font-nokora text-lg font-black text-orange-solid'>₹ {item.price}</p>
            </div>
            
            <button onClick={()=>addToCart(item)} className='w-fit h-fit hover:scale-105 transition-all duration-200'>
                <p className='font-nunito text-xs font-black bg-orange-solid2 rounded-3xl px-2 py-1 hover:shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)]'>Add +</p>
            </button>
        </div>
            
        <div className='absolute top-2 right-0 rounded-l-2xl bg-white pl-1 flex shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'>
            <p className='text-yellow-solid font-nokora text-sm font-bold'>{item.rating}</p>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
            <path d="M5.83008 0L7.17716 4.1459H11.5364L8.00971 6.7082L9.35679 10.8541L5.83008 8.2918L2.30337 10.8541L3.65045 6.7082L0.123739 4.1459H4.48299L5.83008 0Z" fill="#F1C40F"/>
            </svg>
        </div>
    </div>
  )
}

export default Item