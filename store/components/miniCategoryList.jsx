import React from 'react'
import Link from 'next/link'


export default function MiniCategoryList(props) {
  console.log(props)
  const categories = props ? props.categories: []
  const selectedCategory = props ? props.selectedCategory : ''
  return (
    <>
    <div className='flex justify-center-center'>
    <div className='overflow-x-scroll flex justify-center flex-nowrap my-4'>
    {categories.length? categories.map((category) => 
      {
        if(selectedCategory && selectedCategory.toLowerCase() == category.name.toLowerCase()){
          return <div className='badge min-w-fit m-2 text-ellipsis'>
            <Link href={`/product/search/-/${category.name}`}>
            <p>{category.name}</p>
            </Link> 
          </div>
        }
          return <div className='badge badge-accent badge-outline min-w-fit m-2 text-ellipsis'>
            <Link href={`/product/search/-/${category.name}`}>
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
