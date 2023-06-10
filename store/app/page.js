import Carousel from "@/components/carousel"
import ProductList from "@/components/productList"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {getCategory } from "./store/category"
import { getBanner } from "./store"
import CategoryCard from "@/components/categoryCard"
import ProductCard from "@/components/productCard"


export default async function Home() {
  const resC = await getCategory()
  const resCH = await getCategory({isHighlight:true})
  const resB = await getBanner()
  const categoryList = resC ? resC.data.slice(0,5) : []; 
  const bannerList = resB ? resB.data : [];
  const highlighted = resCH ? resCH.data : []
  return (
    <>
    <main>
      <Navbar/>
    <div className="w-full flex flex-col items-center">
    <div className="w-full max-w-screen-lg">
    <Carousel
    banners={...bannerList}
    />

    <div className="w-full mt-2 p-2 flex flex-col rounded-xl text-base-content justify-start shadow">
    <h1 className="text-xl font-bold">Daftar Kategori</h1>
    <div className="flex flex-row overflow-x-auto">
    {categoryList.map((item)=>
      <CategoryCard 
      image={item.image}
      name={item.name}
      />
    )}
    </div>
    </div>
    {highlighted ? highlighted.map((category)=>
    <div className="w-full mt-2 p-2 flex flex-col rounded-xl text-base-content justify-start shadow">
    <h1 className="text-xl font-bold">Pilihan {category.name}</h1>
      <div className="flex gap-2 flex-row overflow-x-auto">
    {category.product.map((item)=>
      <ProductCard
      id = {item.id}
      price = {item.price}
      isHighlight = {item.isHighlight}
      description = {item.description}
      image={item.image}
      name={item.name}
      />
    )}
    </div>
    </div>
    )
    :<></>}
    <div className="bg-primary mt-6 flex flex-col p-4 rounded-xl w-full">
    <h1 className="text-primary-content text-xl md:text-3xl font-bold">
    Daftar Produk
    </h1>
    </div>
    <ProductList/>
    </div>
    </div>
    <Footer/> 
    </main>
    </>
  )
}
