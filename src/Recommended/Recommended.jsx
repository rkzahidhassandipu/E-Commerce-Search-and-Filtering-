import React from 'react'

const Recommended = () => {
  return (
    <div className='w-4/5 mx-auto py-5'>
      <h1 className='font-semibold text-2xl'>Recommended</h1>
      <div className='mt-3'>
        <button className='border rounded-md text-base px-2 py-1 mx-3'>All Products</button>
        <button className='border rounded-md text-base px-2 py-1 mx-3'>Nike</button>
        <button className='border rounded-md text-base px-2 py-1 mx-3'>Adidas</button>
        <button className='border rounded-md text-base px-2 py-1 mx-3'>Puma</button>
        <button className='border rounded-md text-base px-2 py-1 mx-3'>Vans</button>
      </div>
    </div>
  )
}

export default Recommended