import React, { useState } from 'react'
import Header from '../Components/Header'
import ExploreMenu from '../Components/ExploreMenu'
import FoodDisplay from '../Components/FoodDisplay'
const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div className='max-w-full mx-auto p-10 '>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
