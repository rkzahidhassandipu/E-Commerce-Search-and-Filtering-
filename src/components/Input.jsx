import React from 'react'

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <div>
      <div className='my-2'>
          <label className="sidebar-label-container rounded cursor-pointer">
            <input onChange={handleChange} value={value}  type="radio" name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:border-none mr-3" />
            {title}
          </label>
        </div>
    </div>
  )
}

export default Input