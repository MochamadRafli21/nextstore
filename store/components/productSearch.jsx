'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getProduct } from '@/app/store/product'
export default function ProductSearch() {
  const [productList, setProductList] = useState([])
  const [search, setSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  useEffect(()=>{
    if(search.length){
      const get = async()=>{
        const query = {
          "q": search,
          "category": ""
        }
        const resP = await getProduct(query)
        const data = resP ? resP.data : [];

        setProductList( data.slice(0,3) )
      }
      get()
    }
  }, [search])

  return (
    <>
    <div className='relative'>
    <div className="form-control input input-primary text-base-content">
    <div className='flex bg-base-100 input'>
    <input
    type="text"
    placeholder="Search" 
    onFocus={() => setIsSearching(true)}
    onChange={(e)=> setSearch(e.target.value)}
    value={search}
    className="bg-base-100 focus:outline-0"
    />
    {search.length?
      <button onClick={()=> setSearch("")} className="text-sm text-error font-bold"  type="reset">
      X
      </button>
      : <></>
    }
    </div>
    </div>

    { search && isSearching?
      <div onBlur={()=> setIsSearching(false)} className='absolute text-base-content top-16 left-0 z-10'>
      <ul className="menu z-30 bg-base-100 w-56 p-2 shadow-black rounded-box">
      <Link onClick={()=> setIsSearching(false)} href={`/product/search/${search}/-/`}>
        <li>
          <a>Cari {search}...</a>
        </li>
      </Link>

      {
        productList.length ? productList.map((item)=>
          <Link onClick={()=> setIsSearching(false)} href={`/product/${item.id}`}>
          <li>
            <a>
              {item.name}
            </a>
          </li>
          </Link>
        ):
        <></>
      }
      </ul>
      </div>
      :
      <></>
    }
    </div>
    </>
  )
}

