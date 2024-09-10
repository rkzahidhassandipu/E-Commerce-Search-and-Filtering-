import React from 'react'
import Input from '../../components/Input';

const Category = () => {
  return (
    <div className='py-2 mt-8'>
      <div className='text-start text-2xl mb-3'>
        <h1 className='ml-3'>Category</h1>
      </div>
      <form className='text-start pl-3' action="">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </form>
      
    </div>
  )
}

export default Category;