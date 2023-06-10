import React from 'react'
import CategoryDelete from '@/components/category/categorydelete'
import Link from 'next/link'
export default function CategoryTable(props) {
  const categories = props.categories
  return (
    <>
    <div className="mt-2 overflow-x-auto w-full">
    <table className="table table-fixed table-compact text-base-content w-full">
    <thead className='bg-accent'>
    <tr>
    <th>Image</th>
    <th>Name</th>
    <th></th>
    </tr>
    </thead>
    <tbody className='w-full'>

    {categories ? 
      categories.map((category)=> 
        <tr>
          <td className='link link-primary'>
            <Link href={`/admin/category/${category.id}`}>
            {category.name}
            </Link>
          </td>
          <td>
          <div className="flex items-center space-x-3">
          <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
          <img src={category.image} alt={category.name} />
          </div>
          </div>
          </div>
          </td>

          <td className='text-error'>
            <div>
              <CategoryDelete id={category.id}/>
            </div>
          </td>
        </tr>
      )
        :
    <div className='w-full flex justify-center items-center p-2'>
      <h1>Kategori Kosong</h1>
    </div>
    }
    </tbody>
    </table>
    </div>
    </>
  )
}


