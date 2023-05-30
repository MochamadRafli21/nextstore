
import {getCategory } from "../store/category"
import { getBanner } from "../store"
import CategoryTable from "@/components/admin/categoryTable";
import Link from "next/link";
import BannerTable from "@/components/admin/bannerTable";

export default async function Admin() {
  const resC = await getCategory()
  const resB = await getBanner()
  const categoryList = resC ? resC.data : []; 
  const bannerList = resB.data ? resB.data : [];
  return (
    <>
    <main className="h-full flex flex-col items-center justify-between p-2">
    <div className="w-full md:w-1/2 justify-start m-1 text-base-content text-lg font-bold">
    
    <div className="flex justify-between mt-2">
    <h1>
    Daftar Kategori
    </h1>
    <Link href="/admin/category/add">
    <button className="btn btn-accent btn-sm btn-active text-accent-content">
    + Kategori Baru
    </button>
    </Link>
    </div>

    <CategoryTable
    categories = {categoryList}
    />
    </div>



    <div className="w-full md:w-1/2 justify-start m-1 text-base-content text-lg font-bold">
    
    <div className="flex justify-between mt-2">
    <h1>
    Daftar Banner
    </h1>
    <Link href="/admin/banner/add">
    <button className="btn btn-accent btn-sm btn-active text-accent-content">
    + Banner Baru
    </button>
    </Link>
    </div>

    <BannerTable
      banners = {bannerList}
    />
    </div>
    </main>
    </>
  )
}
