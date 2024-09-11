import React from 'react'
import Input from '../../components/Input';

const Price = ({handleChange}) => {
  return (
    <div className='py-2'>
      <div className='text-start text-2xl mb-3'>
        <h1 className='ml-3'>Price</h1>
      </div>
        <div className='text-start pl-3'>
          <label className="sidebar-label-container rounded cursor-pointer">
            <input onChange={handleChange} value=''  id="default-radio-1" type="radio" name='test2' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" /> All
          </label>
          
          <Input
            handleChange={handleChange}
            value={50}
            title='$0-$50'
            name='test2'
          />
          <Input
            handleChange={handleChange}
            value={50}
            title='$0-$50'
            name='test2'
          />
          <Input
            handleChange={handleChange}
            value={100}
            title='$50-$100'
            name='test2'
          />
          <Input
            handleChange={handleChange}
            value={150}
            title='$100-$150'
            name='test2'
          />
          <Input
            handleChange={handleChange}
            value={200}
            title='Over $150'
            name='test2'
          />
        </div>
    </div>
  )
}

export default Price;