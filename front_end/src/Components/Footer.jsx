import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='Footer bg-gray-600 flex flex-col gap-2 p-10 pt-10 items-center text-white mt-10' id="Footer">
            <div className="footer-content grid  grid-cols-[2fr_1fr_1fr] w-full gap-10  items-center">

                <div className="footer-content-left flex flex-col gap-10 items-start ">
                    <img className="w-[220px]" src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, explicabo maxime excepturi fuga, repudiandae eos deleniti harum, deserunt non dolorem sint laborum doloribus similique quia laboriosam minus cumque eius reiciendis.</p>
                    <div className="social-media-icons flex gap-4">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center ">
                    <h2 className='text-2xl font-bold'>COMPANY</h2>
                    <ul className='cursor-pointer'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right ">
                    <h2 className='text-2xl font-bold '>Get In Touch</h2>
                    <ul className='cursor-pointer'>
                        <li>github</li>
                        <li>email.id</li>
                    </ul>
                </div>
            </div>
            <hr className='h-[1px] bg-gray-100 w-[100%] mt-10'/>
            <p className='Footer-CopyRight'>Copyright 2024 @ QuickBites.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer
