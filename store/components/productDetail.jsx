import React from 'react'

export default function ProductDetail(props) {
  console.log(props.image)
  return (
    <>
    <div className="w-full md:hidden">
    {props.image?
      <figure><img className='w-full' src={props.image} alt={props.name} /></figure>
      :<></>} 
    <div className='card bg-base-100 mt-3'>
    <div className='card-title px-4 text-base-content w-full'>
    <h1>{props.name}</h1> 
    <p className='badge'>
    {props.price ? props.price: "FREE" }
    </p>
    </div>
    <div className="text-gray-500 px-4 mt-3">
    <p>
    {props.description}
    </p> 
    </div>
    </div>
    </div>
    </>
  )
}

