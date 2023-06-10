import React from 'react';
import CategoryForm from '@/components/category/CategoryForm';
import { getProductServer } from '@/app/store/product';
import { getCategoryDetail } from '@/app/store/category';
import { notFound } from 'next/navigation';
export default async function AddCategory({params: {id}}) {
  const resP = await getProductServer()
  const productList = resP ? resP.data: [];
  const categoryDetail = await getCategoryDetail(id)
  if(!categoryDetail){
    throw notFound()
  }
  return (
    <>
    <main className="w-full h-full flex flex-col items-center justify-between p-2">
    <div className="m-4 w-full md:w-3/4 card card-bordered bg-base-100 rounded-xl">
      <div className="card-body" >
        <h1 className="text-accent card-title font-bold rounded-xl ">
          Kategori    
        </h1>
        <CategoryForm
          resP={productList}
          data={categoryDetail.data}
          isEdit={true}
        />
      </div>
    </div>

    </main>
    </>
  )
}
