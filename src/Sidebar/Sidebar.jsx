import React from 'react'
import Category from './Category/Category'
import { CiShoppingCart } from "react-icons/ci";
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = () => {
  return (
    <div className='mx-auto absolute top-20 pt-20 text-center w-1/12 border-r h-full'>
        <div>
            <h1><CiShoppingCart /></h1>
        </div>
        <Category />
        <Price />
        <Colors />
    </div>
  )
}

export default Sidebar