import React from 'react'
import formatter from '@/utils/formater'

export default function ProductTable(props) {
  const products = props.products
  return (
    <>
    <div className="my-2 flex justify-center overflow-x-auto">
    <table className="table bg-base-100">
    <thead>
    <tr>
    <th>Image</th>
    <th>Name</th>
    <th></th>
    <th></th>
    </tr>
    </thead>
    <tbody className='text-base-content'>

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
            <span className='badge badge-secondary badge-sm text-secondary-content'>
              {product.price?"Harga: "+formatter.format(product.price).replace("IDR", "Rp."):"FREE"}
            </span>
            {product.category?
              <span className='badge badge-primary badge-sm text-primary-content'>
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
    <div className='flex justify-center items-center p-2'>
      <h1>Product Kosong</h1>
    </div>
    }
    </tbody>
    </table>
    </div>
    </>
  )
}


