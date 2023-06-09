import formatter from '@/utils/formater'
import React from 'react'
import Link from 'next/link'

export default function ProductCard(props) {
  const aTprice = props?formatter.format(props.price).replace("IDR", "Rp."):"FREE"
  return (
    <>
    <Link href={"/product/"+props.id} >
    <div className="card card-compact overflow-hidden w-44 md:my-4 bg-base-100 shadow">
      {
        props.image ? 
        <figure><img className='w-44 h-44 object-cover rounded-xl' src={props.image} alt={props.name} /></figure>
        :<></>
      }
      <div className="card-body h-[180px]">
      <h2 className="text-sm card-title">
        {props.name}
      </h2>
      <h6 className='font-bold text-accent'>{aTprice}</h6>
      <p className='text-sm line-clamp-2'>{props.description}</p>
        {
          props.isHighlight?
          <div className="badge badge-secondary">Favorite</div>:
          <></>
        }
      </div>
    </div>
    </Link>
    </>
  )
}
