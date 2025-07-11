import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explore_menu  w-[80vw] mx-auto p-5  '>
      <h1 className='Explore_menu_heading font-bold text-4xl p-3 mb-4 text-white'>Explore Our Menu</h1>
      <p className='Explore_menu_text p-2 mb-10 text-xl text-white max-w-[80%]'>Craving something fast and tasty? Discover our selection of delicious bites made for quick hunger fixes – fresh, flavorful, and ready in no time!</p>
      <div className='Explore_menu_list flex gap-10 overflow-x-scroll pb-5'>
        {/* why we are using map because when we want return an array we need this function */}
        {menu_list.map((item, index) => {

          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Explore_items flex flex-col justify-around items-center rounded-[50%]  min-w-[150px] hover:scale-105 transition-transform cursor-pointer '>
              <img  className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
              <p className='menu_name text-gray-100 font-bold'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
