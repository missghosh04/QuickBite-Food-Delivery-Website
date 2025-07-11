import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu'
const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div className='max-w-full mx-auto p-10 bg-amber-900'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
