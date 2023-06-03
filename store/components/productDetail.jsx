import formatter from '@/utils/formater'
import React from 'react'

export default function ProductDetail(props) {
  return (
    <>
    <div className=' py-4 w-full hidden lg:flex flex-row justify-start items-start'>
    
    {
      props.image ? 
      <div className='mx-4 text-primary-content'>
      <figure>
      <img className='w-[180px] md:w-[230px] h-[360px] min-h-52 max-h-52 object-cover' src={props.image} alt={props.name} />
      </figure>
      </div>
      :<></>
    }

    <div className="divider divider-horizontal"></div> 
    <div className='card text-primary-content max-w-md'>
    <div className='card-title px-4 text-base-content m'>
    <h1>{props.name}</h1> 
    <p className='badge'>
    {props.price ?formatter.format(props.price).replace("IDR", "Rp."): "FREE" }
    </p>
    </div>
    <div className="text-gray-500 px-4 mt-3">
    <p>
    {props.description}
    </p> 
    </div>
    </div>
    
    </div>
    
    <div className="w-full lg:hidden">
    {props.image?
      <figure><img className='w-full aspect-square object-cover' src={props.image} alt={props.name} /></figure>
      :<></>} 
    <div className='card mt-3'>
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

