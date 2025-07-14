import React from 'react'
import {assets} from "../assets/assets"
import { useState, useEffect } from 'react';
const Header = () => {
    
    return (
        <div className='Header h-[90vh] p-5 m-5 bg-amber-50 flex justify-center items-center  relative '>
            <div className='Header-Background absolute m-5 p-10 h-[80vh] w-[80vw] rounded-xl bg-center  text-white flex flex-col justify-center items-start ' style={{ backgroundImage: `url(${assets.header_img})` }}>
                <div className='header-contents w-[60%] flex flex-col  items-start gap-5 '>
                    <h1 className='text-5xl font-bold'>Welcome to QuickBite</h1>
                    <p className='font-bold'>Craving something delicious? Get your favorite meals delivered hot and fresh in minutes! QuickBite brings the best local restaurants right to your doorstep—fast, affordable, and always tasty.</p>
                    <button className='px-4 py-2 border-1 bg-white text-gray-600 border-amber-400 rounded-2xl hover:bg-gray-200'>View Menu</button>

                </div>
            </div>
        </div>

    )
}

export default Header
