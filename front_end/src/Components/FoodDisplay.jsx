import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display mt-10 ' id="food-display">

      <h1 className='text-gray-600 font-bold text-4xl  p-2 m-4'>Top dishes near you</h1>

      <div className='food-display-list grid grid-cols-4 gap-y-5  gap-x-5 mt-10 bg-amber-200'>

        {food_list.map((item,index)=>{

          if(category==="All"||category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
          
        })}
      </div>
      
    </div>
  )
}

export default FoodDisplay
