import React from 'react';
import ProductForm from '@/components/product/ProductForm';

export default async function AddProduct() {
  
  return (
    <>
    <main className="w-full h-full flex flex-col items-center justify-between p-2">
    <div className="m-4 w-full md:w-3/4 card card-bordered bg-base-100 rounded-xl">
      <div className="card-body" >
        <h1 className="text-accent card-title font-bold rounded-xl ">
          Produk    
        </h1>
        <ProductForm/>
      </div>
    </div>
    </main>
    </>
  )
}
