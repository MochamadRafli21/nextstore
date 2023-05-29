import Carousel from "@/components/carousel"
import CategoryCard from "@/components/categoryCard"
import ProductList from "@/components/productList"
import {getCategory } from "./store/category"
import { getBanner } from "./store"

export default async function Home() {
  const resC = await getCategory()
  const resB = await getBanner()
  const categoryList = resC ? resC.data.slice(0,5) : []; 
  const bannerList = resB.data ? resB.data : [];
  return (
    <>
    <main className="flex flex-col items-center justify-between p-2">
      <Carousel
        banners={...bannerList}
      />
    <div className="bg-primary w-full flex flex-col p-4 rounded-xl md:w-3/4 items-start justify-between">
    <h1 className="text-primary-content text-xl md:text-3xl font-bold">
    Kategori Favorit
    </h1>
    <div className="flex flex-wrap w-full mt-4">
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
    </main>
    </>
  )
}
