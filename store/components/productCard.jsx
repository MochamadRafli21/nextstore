import formatter from '@/utils/formater'
import React from 'react'
import Link from 'next/link'

export default function ProductCard(props) {
  const price = formatter.format(props.price).replace("IDR", "Rp.")
  return (
    <>
    <Link href={"/product/"+props.id} >
    <div className="card object-scale-down w-[180px] md:w-[230px] h-[360px] m-2 card-compact md:my-4 border-primary bg-base-100 shadow-xl">
      {
        props.image ? 
        <figure><img className='w-100 h-100 min-h-52 max-h-52 object-fill rounded-xl' src={props.image} alt={props.name} /></figure>
        :<></>
      }
      <div className="card-body h-[130px]">
      <h2 className="text-sm card-title">
        {props.name}
      </h2>
      <h6 className='font-bold text-primary'>{price}</h6>
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
