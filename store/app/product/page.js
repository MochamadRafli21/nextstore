import MiniCategoryList from "@/components/miniCategoryList"
import ProductList from "@/components/productList"
import { getCategory } from "@/app/store/category"

export default async function Product() {
  const resC = await getCategory()
  const categoryList = resC ? resC.data.slice(0,5) : []
  return (
    <>
    <main className="flex flex-col items-center justify-center">
    <MiniCategoryList
    categories={categoryList}
    />      
    <h1 className="mt-4 text-base-content font-bold text-xl md:text-3xl">
    Daftar Product
    </h1>
    <ProductList/>
    </main>
    </>
  )
}
