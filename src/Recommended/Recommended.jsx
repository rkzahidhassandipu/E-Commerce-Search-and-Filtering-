import React from 'react'
import Buttons from '../components/Buttons'

const Recommended = ({handleClick}) => {
  return (
    <div className='w-4/5 mx-auto py-5'>
      <h1 className='font-semibold text-2xl'>Recommended</h1>
      <div className='mt-3'>
        <Buttons onClickHandler={handleClick} value="" title='All Products' />
        <Buttons onClickHandler={handleClick} value="Puma" title='Puma' />
        <Buttons onClickHandler={handleClick} value="Adidas" title='Adidas' />
        <Buttons onClickHandler={handleClick} value="Nike" title='Nike' />
        <Buttons onClickHandler={handleClick} value="Vans" title='Vans' />
      </div>
    </div>
  )
}

export default Recommended