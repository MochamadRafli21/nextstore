import React from 'react'
import Link from 'next/link'

export default function CategoryCard(props) {
  return (
    <>
    <Link href={"/product/search/-/"+props.name}>
    <div className='bg-primary text-primary-content rounded w-fit h-24 p-3 m-2 flex flex-col shadow'>
    {props.image ?
      <div className='avatar w-8'>
      <div className='w-8 md:w-16 bg-base-100 rounded'>
      <img src={props.image} alt={`icon-${props.name}`}/>
      </div>
      </div>
      : 
      <div className='avatar w-8 placeholder'>
      <div className='text-base-content rounded w-8 md:w-16'>
      <span>...</span>
      </div>
      </div>
    }
    <div className='items-center pt-1'>
    <span className='text-base-content font-bold text-sm'>
    {props.name}
    </span>
    </div>
    </div>

    </Link>
    </>
  )
}

