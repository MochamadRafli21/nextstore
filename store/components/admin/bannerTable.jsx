import React from 'react'

export default function BannerTable(props) {
  const banner = props.banners
  return (
    <>
    <div className="mt-2 overflow-x-auto w-full">
    <table className="table text-base-content w-full">
    <thead className='bg-accent'>
    <tr>
    <th>Image</th>
    </tr>
    </thead>
    <tbody className='w-full'>

    {banner ? 
      banner.map((ban)=> 
        <tr>
          <td>
          <div className="flex flex-col items-center justify-center space-x-3">
          <div className="avatar">
          <img className='w-max-sm object-cover' src={ban.image} />
          </div>
        <button className='w-full mt-2 btn btn-error text-error-content'>
        Hapus
        </button>
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


