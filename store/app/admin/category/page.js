import {getCategory } from "@/app/store/category"

import CategoryTable from "@/components/admin/categoryTable";
import Link from "next/link";

export default async function Admin() {
  const resC = await getCategory()
  const categoryList = resC ? resC.data : []; 
  return (
    <main className="h-full flex flex-col items-center justify-between">
    <div className="w-full bg-primary flex justify-between p-2 text-primary-content">
    <h1 className="font-bold text-lg">
    Daftar Kategori
    </h1>
    <Link href="/admin/category/add">
    <button className="btn btn-accent btn-sm btn-active">
    + Kategori Baru
    </button>
    </Link>
    </div>
    
    <div className="w-full md:w-1/2 justify-start m-1 text-base-content text-lg font-bold">
    <CategoryTable
    categories = {categoryList}
    />
    </div>


    </main>
  )
}
