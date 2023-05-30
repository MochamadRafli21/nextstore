import React from 'react'

export default function CategoryTable(props) {
  const categories = props.categories
  return (
    <>
    <div className="mt-2 overflow-x-auto w-full">
    <table className="table text-base-content w-full">
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
          <td>
          <div className="flex items-center space-x-3">
          <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
          <img src={category.image} alt={category.name} />
          </div>
          </div>
          </div>
          </td>

          <td>
            {category.name}
          </td>
          <td className='text-error'>
            Hapus
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


