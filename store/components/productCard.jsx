import formatter from '@/utils/formater'
import React from 'react'
import Link from 'next/link'

export default function ProductCard(props) {
  const price = formatter.format(props.price).replace("IDR", "Rp.")
  return (
    <>
    <Link href={"/product/"+props.id} >
    <div className="card m-4 w-full md:w-48 border-primary bg-base-100 shadow-xl">
      <figure><img src={props.image} alt={props.name} /></figure>
      <div className="card-body">
      <h2 className="card-title">
        {props.name}
      </h2>
      <h1 className='font-bold text-primary'>{price}</h1>
      <p className='line-clamp-2'>{props.description}</p>
        {
          props.isHighlight?
          <div className="badge badge-secondary">Favorite</div>:
          <div></div>
        }
      </div>
    </div>
    </Link>
    </>
  )
}
