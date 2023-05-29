"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';


export default function MiniCategoryList(props) {
  const query = useSearchParams();

  const categories = props.categories
  const selectedCategory = query.get("category")
  return (
    <>
    <div className='w-full flex items-center md:w-1/2'>
    <div className='w-full overflow-x-scroll flex flex-nowrap my-4'>
    {categories.length? categories.map((category) => 
      {
        if(selectedCategory && selectedCategory.toLowerCase() == category.name.toLowerCase()){
          return <div className='badge min-w-fit p-3 m-2 text-ellipsis'>
            <Link href={`/product?category=${category.name}`}>
            <p>{category.name}</p>
            </Link> 
          </div>
        }
          return <div className='badge badge-accent badge-outline min-w-fit p-3 m-2 text-ellipsis'>
            <Link href={`/product?category=${category.name}`}>
            <p>{category.name}</p>
            </Link> 
          </div>
        
      }
    ):<></>}     
    </div>
    </div>
    </>
  )
}
