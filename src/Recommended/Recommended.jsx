import React from 'react'

const Recommended = ({onClickHandler, value, title}) => {
  return (
    <div className='w-4/5 mx-auto py-5'>
      <h1 className='font-semibold text-2xl'>Recommended</h1>
      <div className='mt-3'>
        <button className='border rounded-md text-base px-2 py-1 mx-3'
          onClick={onClickHandler} value={value}
        >
          {title}
        </button>
      </div>
    </div>
  )
}

export default Recommended