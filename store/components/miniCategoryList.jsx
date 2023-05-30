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
    <div className='flex justify-center-center'>
    <div className='overflow-x-scroll flex justify-center flex-nowrap my-4'>
    {categories.length? categories.map((category) => 
      {
        if(selectedCategory && selectedCategory.toLowerCase() == category.name.toLowerCase()){
          return <div className='badge min-w-fit m-2 text-ellipsis'>
            <Link href={`/product?category=${category.name}`}>
            <p>{category.name}</p>
            </Link> 
          </div>
        }
          return <div className='badge badge-accent badge-outline min-w-fit m-2 text-ellipsis'>
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
