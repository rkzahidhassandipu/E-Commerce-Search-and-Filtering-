import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

const Products = () => {
  return (
    <section className='w-4/5 mx-auto flex flex-wrap justify-around box-border'>
      <div className='w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0'>
        <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" />
        <div className='pt-3'>
          <h2>Shoes</h2>
          <div className='flex items-center text-amber-500'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <span>4</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <span className='line-through'>$520</span>
              <span>$400</span>
            </div>
            <div>
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <div className='w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0'>
        <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" />
        <div className='pt-3'>
          <h2>Shoes</h2>
          <div className='flex items-center text-amber-500'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <span>4</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <span className='line-through'>$520</span>
              <span>$400</span>
            </div>
            <div>
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <div className='w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0'>
        <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" />
        <div className='pt-3'>
          <h2>Shoes</h2>
          <div className='flex items-center text-amber-500'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <span>4</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <span className='line-through'>$520</span>
              <span>$400</span>
            </div>
            <div>
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <div className='w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0'>
        <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" />
        <div className='pt-3'>
          <h2>Shoes</h2>
          <div className='flex items-center text-amber-500'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <span>4</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <span className='line-through'>$520</span>
              <span>$400</span>
            </div>
            <div>
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Products