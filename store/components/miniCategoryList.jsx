import React from 'react'
import Link from 'next/link'


export default function MiniCategoryList(props) {
  const product = props.name ? props.product : "-"
  const categories = props ? props.categories: []
  console.log(categories)
  const selectedCategory = props ? props.selectedCategory : ''
  return (
    <>
    <div className='bg-primary px-2 w-full flex justify-center-center'>
    <div className='overflow-x-auto no-scrollbar flex justify-center flex-nowrap my-1'>
    {categories.length? categories.map((category) => 
      {
        if(selectedCategory && selectedCategory.toLowerCase() == category.name.toLowerCase()){
          return <div className='badge min-w-fit h-fit m-2 text-ellipsis'>
            <img className='w-6 h-6 m-1 object-cover rounded-full avatar' src={category.image} alt={category.name}/>
            <Link href={`/product/search/${product}/${category.name}`}>
            <p>{category.name}</p>
            </Link> 
          </div>
        }
          return <div className='badge bg-base-100 min-w-fit h-fit m-2 text-base-content text-ellipsis'>
            <img className='w-6 h-6 m-1 object-cover rounded-full avatar' src={category.image} alt={category.name}/>
            <Link href={`/product/search/${product}/${category.name}`}>
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
