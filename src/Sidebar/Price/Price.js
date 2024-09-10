import React from 'react'
import Input from '../../components/Input';

const Price = () => {
  return (
    <div className='py-2 mt-4'>
      <div className='text-start text-2xl mb-3'>
        <h1 className='ml-3'>Price</h1>
      </div>
      <form className='text-start pl-3' action="">
        <Input />
        <Input />
        <Input />
        <Input />
      </form>
      
    </div>
  )
}

export default Price;