import React from 'react';
import AddOrder from '@/components/order/AddOrder';
export default async function CreateOrder() {
  
  return (
    <>
    <main className="w-full h-full flex flex-col items-center justify-between p-2">
    <div className="m-4 w-full md:w-3/4 card card-bordered bg-base-100 rounded-xl">
      <div className="card-body" >
        <h1 className="text-accent card-title font-bold rounded-xl ">
          Pesanan    
        </h1>
        <AddOrder/>
      </div>
    </div>

    </main>
    </>
  )
}
