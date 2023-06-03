import Carousel from "@/components/carousel"
import ProductList from "@/components/productList"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {getCategory } from "./store/category"
import { getBanner } from "./store"
import MiniCategoryList from "@/components/miniCategoryList"
export default async function Home() {
  const resC = await getCategory()
  const resB = await getBanner()
  const categoryList = resC ? resC.data.slice(0,5) : []; 
  const bannerList = resB ? resB.data : [];
  return (
    <>
    <main>
      <Navbar/>
      <div className="w-full flex flex-col items-center">
        <Carousel
          banners={...bannerList}
        />
        <MiniCategoryList
          categories={categoryList}
        />      
      </div>
    <div className="w-full flex flex-col items-center justify-center">
    <div className="bg-accent mt-6 flex flex-col p-4 rounded-xl w-full md:w-3/4 items-start justify-between">
    <h1 className="text-accent-content text-xl md:text-3xl font-bold">
    Daftar Produk
    </h1>
    </div>
    <ProductList/>
    </div>
    <Footer/> 
    </main>
    </>
  )
}
