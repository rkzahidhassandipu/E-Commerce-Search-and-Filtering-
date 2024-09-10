import React from 'react'
import Input from '../../components/Input';

const Colors = () => {
  return (
    <div className='py-2 mt-4'>
      <div className='text-start text-2xl mb-3'>
        <h1 className='ml-3'>Colors</h1>
      </div>
      <form className='text-start ml-3' action="">
        <Input />
        <Input />
        <Input />
        <Input />
      </form>
      
    </div>
  )
}

export default Colors;