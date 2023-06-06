import React from 'react'
import Link from "next/link";

export default function OrderTable({orders}) {
  return (
    <>
    <div id='order' className="my-2 flex justify-center overflow-x-auto">
    <table className="table bg-base-100">
    <thead>
    <tr>
    <th>Order Id</th>
    <th>Status</th>
    <th>Penerima</th>
    <th>Produk</th>
    </tr>
    </thead>
    <tbody className='text-base-content'>

    {orders ? 
      orders.map((order)=> 
        <tr>
          <th>
            {order.uuid}
          </th>
          <td></td>
          <td>
            <div className='flex flex-row'>
            <div className='mr-1'>
            {order.name}
            <br/>
            <span className='badge badge-secondary badge-sm text-secondary-content'>
              {order.phone}
            </span>
            </div>
            <div className='flex justify-center items-center p-2'>
              <Link href={`https://wa.me/${order.phone}?text=${encodeURI('Hey '+order.name+ 'Pesanan mu telah diterima')}`}>
                <button className='btn btn-success' type='button'>
                  Follow Up
                </button>
              </Link>            
            </div>
            </div>
          </td>
          <td>
            {order.product_name}
            <br/>
            <span className='badge badge-secondary badge-sm text-secondary-content'>
              {order.price}
            </span>
          </td>
        </tr>
      )
        :
    <div className='flex justify-center items-center p-2'>
      <h1>Order Kosong</h1>
    </div>
    }
    </tbody>
    </table>
    </div>
    </>
  )
}

