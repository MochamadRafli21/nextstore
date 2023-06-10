import React from 'react'

export default function AdminNavbar() {
  return (
    <>
    <div className='w-full bg-primary'>
    <div className="tabs">
    <a href='/admin' className="tab tab-lifted">Order</a> 
    <a href='/admin/product' className="tab tab-lifted">Product</a> 
    <a href='/admin/group' className="tab tab-lifted">Category Group</a> 
    <a href='/admin/category' className="tab tab-lifted">Category</a>
    <a href='/admin/banner' className="tab tab-lifted">Banner</a>
    </div>
    </div>
    </>
  )
}


