import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

const Cart = ({img, title, star, prevPrice, newPrice, reviews}) => {
  return (
    <div className='w-72 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl my-6 border cursor-pointer lg:mt-0'>
        <img className='w-full h-56' src={img} alt={title} />
        <div className='pt-3 py-3 my-3 px-2'>
          <h2 className='text-xl'>{title}</h2>
          <div className='flex items-center text-amber-500 my-2'>
            {star}
            {star}
            {star}
            {star}
            <span>{reviews}</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <span className='line-through'>{prevPrice}</span>
              <span>{newPrice}</span>
            </div>
            <div>
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cart