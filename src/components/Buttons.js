import React from 'react'

const Buttons = ({onClickHandler, value, title}) => {
  return (
    <button className='border rounded-md text-base px-2 py-1 mx-3'
          onClick={onClickHandler} value={value}
        >
          {title}
        </button>
  )
}

export default Buttons