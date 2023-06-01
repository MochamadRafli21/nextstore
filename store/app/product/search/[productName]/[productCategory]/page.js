import MiniCategoryList from "@/components/miniCategoryList"
import ProductList from "@/components/productList"
import { getCategory } from "../../../../store/category/"

export default async function Product({params}) {
  console.log(params)
  const categoryName = params ? params.productCategory : ''
  const productName = params ? params.productName : ''
  const resC = await getCategory()
  const categoryList = resC.data ? resC.data.slice(0,5) : []
  return (
    <>
    <main className="flex flex-col items-center justify-between">
    <h1 className="mt-4 text-base-content font-bold text-xl md:text-3xl">
    Daftar Product
    </h1>
    <MiniCategoryList
    categories={categoryList}
    selectedCategory={categoryName}
    />      
    <ProductList
      name = {productName == "-"? "":productName }
      categoryName = {categoryName == "-"? "": categoryName}
    />
    </main>
    </>
  )
}
