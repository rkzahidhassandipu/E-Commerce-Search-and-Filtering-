import React from 'react'
import Cart from '../components/Cart'

const Products = ({result}) => {
  return (
    <section className='w-4/5 mx-auto flex flex-wrap justify-around box-border'>
      {result}
    </section>
  )
}

export default Products