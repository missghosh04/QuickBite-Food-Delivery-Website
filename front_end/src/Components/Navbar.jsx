import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const[menu,setMenu]=useState("home")
  return (
    <div className='Navbar  h-18 p-10 m-0 flex justify-between items-center bg-transparent'>
      <img src={assets.logo} alt="" className='logo w-[220px]' />
      <ul className="navbar-menu flex gap-10 font-medium cursor-pointer ">
        <li onClick={() => setMenu("home")} className={menu==="home"?"pb-1 border-b-2  border-amber-400":""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu==="menu"?"pb-1 border-b-2 border-amber-400":""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"pb-1 border-b-2 border-amber-400 ":""}>Mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"pb-1 border-b-2 border-amber-400":""}>Contact Us</li>
      </ul>
      <div className="navbar-right flex justify-center items-center gap-10 relative cursor-pointer ">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="" />
          <div className='dot absolute min-h-2 min-w-2 bg-amber-300 rounded-2xl top-0 left-7'></div>
        </div>
      
        <button className="px-4 py-2 border cursor-pointer rounded-xl border-amber-600 hover:bg-amber-200 transition">
          Sign In
        </button>
        

      </div>
    </div>
  )
}

export default Navbar
