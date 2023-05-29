import React from 'react'

export default function ProductDetail(props) {
  console.log(props.image)
  return (
    <>
    <div className='m-6 bg-base-100 p-4 rounded-3xl w-3/4 hidden md:flex flex-row justify-start items-start'>
    
    {
      props.image ? 
      <div className='card mx-4 text-primary-content'>
      <figure>
      <img className='w-[180px] md:w-[230px] h-[360px] min-h-52 max-h-52 object-cover rounded-3xl' src={props.image} alt={props.name} />
      </figure>
      <div className="divider divider-horizontal"></div> 
      </div>
      :<></>
    }

    <div className='card text-primary-content max-w-md'>
    <div className='card-title px-4 text-base-content m'>
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

