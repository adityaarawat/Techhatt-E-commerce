import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleProductHeading = ({title}) => {
    const naviage=useNavigate();
  return (
    <div className='max-w-6xl mx-auto my-10'>
       <h1 className='text-2xl text-red-700 font-semibold'>
            <span className='cursor-pointer' onClick={()=>naviage("/")}>
                Home 
            </span>
            /
            <span className='cursor-pointer' onClick={()=>naviage("/products")}>
            Products
            </span> /
            <span>{title}</span>
            </h1>
    </div>
  )
}

export default SingleProductHeading