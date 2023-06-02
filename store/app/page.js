import Carousel from "@/components/carousel"
import CategoryCard from "@/components/categoryCard"
import ProductList from "@/components/productList"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {getCategory } from "./store/category"
import { getBanner } from "./store"

export default async function Home() {
  const resC = await getCategory()
  const resB = await getBanner()
  const categoryList = resC ? resC.data.slice(0,5) : []; 
  const bannerList = resB ? resB.data : [];
  return (
    <>
    <main>
      <Navbar/>
      <Carousel
        banners={...bannerList}
      />

    <div className="w-full flex flex-col items-center justify-center">
    <div className="w-full flex flex-col md:w-fit">
    <div className="flex flex-col p-2 rounded-xl w-full md:w-3/4 items-start justify-between">
    <h1 className="text-accent text-xl md:text-3xl font-bold">
    Kategori
    </h1>
    </div>
    <div className="grid grid-cols-3 md:grid-cols-4 bg-secondary shadow-xl gap-2 md:rounded-xl">
    {
      categoryList.map((category) => 
        <CategoryCard
        image={category.image}
        name={category.name}
        id={category.id}
        />
      )
    }
    <CategoryCard
    name={"More"}
    />
    </div>
    </div>
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
