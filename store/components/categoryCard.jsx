import React from 'react'

export default function CategoryCard(props) {
  return (
    <>
    <div className='card p-3 m-2 flex-col items-center bg-base-100 shadow-xl'>
    {props.image ?
      <div className='avatar'>
      <div className='w-8 md:w-16 rounded'>
      <img src={props.image} alt={`icon-${props.name}`}/>
      </div>
      </div>
      : 
      <div className='avatar placeholder'>
      <div className='text-neutral-content rounded w-8 md:w-16'>
      <span>...</span>
      </div>
      </div>
    }
    <div className='mt-2 items-center'>
    <span className='text-neutral font-bold text-sm'>
    {props.name}
    </span>
    </div>
    </div>
    </>
  )
}

