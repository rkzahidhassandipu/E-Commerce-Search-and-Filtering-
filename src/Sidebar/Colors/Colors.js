import React from 'react'

const Colors = () => {
  return (
    <div className='py-2 mt-4'>
      <div className='text-start text-2xl mb-3'>
        <h1 className='ml-3'>Colors</h1>
      </div>
      <form className='text-start pl-3' action="">
        <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />All
          </label>
        </div>
        <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />Black
          </label>
        </div>
        <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />Blue
          </label>
        </div>
        <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />Red
          </label>
        </div>
        <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />Green
          </label>
        </div>
        <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />White
          </label>
        </div>
      </form>
      
    </div>
  )
}

export default Colors