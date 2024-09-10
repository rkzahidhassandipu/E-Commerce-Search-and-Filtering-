import React from 'react'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { PiUserCirclePlusLight } from "react-icons/pi";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='w-full border-b'>
        <nav className='w-4/5 mx-auto py-5 flex justify-around items-center '>
        <div className='w-2/3 flex justify-center'>
            <input className='px-3 w-2/3 py-2 bg-gray-100 rounded-md outline-none' type='text' placeholder='Enter your search shoes' />
        </div>
        <div className='flex w-1/3'>
            <a href="">
                <CiHeart className='text-2xl font-bold mx-4' />
            </a>
            <a href="">
                <CiShoppingCart className='text-2xl font-bold mx-4' />
            </a>
            <a href="">
                <PiUserCirclePlusLight className='text-2xl font-bold mx-4' />
            </a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar