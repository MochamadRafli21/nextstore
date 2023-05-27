import React from 'react'
import Link from 'next/link'

export default function CategoryCard(props) {
  return (
    <>
    <Link href={"/category/"+props.id}>
    <div className='card p-3 m-2 flex-col items-center bg-accent shadow-xl'>
    {props.image ?
      <div className='avatar'>
      <div className='w-8 md:w-16 bg-base-100 rounded'>
      <img src={props.image} alt={`icon-${props.name}`}/>
      </div>
      </div>
      : 
      <div className='avatar placeholder'>
      <div className='text-accent-content rounded w-8 md:w-16'>
      <span>...</span>
      </div>
      </div>
    }
    <div className='mt-2 items-center'>
    <span className='text-accent-content font-bold text-sm'>
    {props.name}
    </span>
    </div>
    </div>

    </Link>
    </>
  )
}

