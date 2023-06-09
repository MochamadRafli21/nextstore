import React from 'react';
import GroupForm from '@/components/group/GroupForm';
import { getCategory } from '@/app/store/category';

export default async function AddCategory() {
  const resC = await getCategory()
  const categoryList = resC ? resC.data : []; 
  return (
    <>
    <main className="w-full h-full flex flex-col items-center justify-between p-2">
    <div className="m-4 w-full md:w-3/4 card card-bordered bg-base-100 rounded-xl">
      <div className="card-body" >
        <h1 className="text-accent card-title font-bold rounded-xl ">
          Group    
        </h1>
        <GroupForm
          resC = {categoryList}
        />
      </div>
    </div>

    </main>
    </>
  )
}
