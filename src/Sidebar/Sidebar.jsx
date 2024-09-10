import React from 'react'
import Category from './Category/Category'
import { CiShoppingCart } from "react-icons/ci";
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = ({handleChange}) => {
  return (
    <div className='mx-auto absolute text-center w-1/12 border-r h-auto'>
        <div className='mt-6 text-3xl cursor-pointer'>
            <h1 className='flex justify-center'><CiShoppingCart /></h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
    </div>
  )
}

export default Sidebar