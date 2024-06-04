import React from 'react'
import Item from './Item'

const ItemsList = ({foodData}) => {
  return (
    <div className='grid grid-flow-row md:grid-cols-4 gap-x-32 gap-y-10 md:gap-y-20 my-24'>
        {
            foodData.map((item) => (
                <Item item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default ItemsList