
import ProductList from "@/components/productList"
import { getProductDetail } from "@/app/store/product"
import { notFound } from "next/navigation"
import ProductDetail from "@/components/productDetail"

export default async function Product({params: {id}}) {
  const resPd = await getProductDetail(parseInt(id))
  if(!resPd.data){
    throw notFound()
  }
  const product = resPd.data
  return (
    <>
    <main className="flex flex-col items-center justify-between">
    <ProductDetail
      name={product.name}
      price={product.price}
      description={product.description}
      id={product.id}
      category={product.category}
      image={product.image}
    />
    <ProductList/>
    </main>
    </>
  )
}
