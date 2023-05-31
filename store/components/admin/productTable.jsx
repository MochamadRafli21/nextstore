import React from 'react'

export default function ProductTable(props) {
  const products = props.products
  console.log(products)
  return (
    <>
    <div className="mt-2 overflow-x-auto w-full">
    <table className="table-auto table bg-base-100 col-5 gap-2 rounded-xl">
    <thead>
    <tr>
    <th>Image</th>
    <th>Name</th>
    <th></th>
    </tr>
    </thead>
    <tbody className='w-full text-base-content'>

    {products ? 
      products.map((product)=> 
        <tr>
          <td>
          <div className="avatar">
          <div className="w-36">
          <img src={product.image} />
          </div>
          </div>
          </td>
          <td>
            {product.name}
            <br/>
            <span className='badge badge-info badge-sm text-info-content'>
              {product.price}
            </span>
            {product.category?
              <span className='badge badge-success badge-sm text-success-content'>
              {product.category.name}
              </span>:<></>
            }
          </td>
          <td>
            <button className='btn btn-error text-error-content'>
              Hapus
            </button>
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


