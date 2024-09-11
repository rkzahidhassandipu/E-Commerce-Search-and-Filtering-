import React from 'react'
import Input from '../../components/Input';

const Colors = ({handleChange}) => {
  return (
    <div className='py-2'>
      <div className='text-start text-2xl mb-3'>
        <h1 className='ml-3'>Color</h1>
      </div>
      <div className='text-start ml-3'>
        <Input 
          handleChange={handleChange}
          value='red'
          title='Red'
          name='test1'
          color='red'
        />
        <Input
          handleChange={handleChange}
          value='black'
          title='Black'
          name='test1'
          color='black'
        />
        <Input
          handleChange={handleChange}
          value='white'
          title='White'
          name='test1'
          color='white'
        />
        <Input
          handleChange={handleChange}
          value='blue'
          title='Blue'
          name='test1'
          color='blue'
        />
        <Input
          handleChange={handleChange}
          value='green'
          title='Green'
          name='test1'
          color='green'
        />
      </div>
      
    </div>
  )
}

export default Colors;