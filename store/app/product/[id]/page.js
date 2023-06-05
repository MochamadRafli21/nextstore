
import ProductList from "@/components/productList"
import { getProductDetail } from "@/app/store/product"
import { notFound } from "next/navigation"
import ProductDetail from "@/components/productDetail"
import AddOrder from "@/components/order/AddOrder"
export default async function Product({params: {id}}) {
  const resPd = await getProductDetail(parseInt(id))
  if(!resPd){
    throw notFound()
  }
  const product = resPd.data
  return (
    <main className="flex flex-col items-center justify-between">
    <div className="w-full lg:grid lg:grid-cols-3 lg:p-3 gap-0 lg:w-fit">
    <div className="lg:col-span-2">
    <ProductDetail
      name={product.name}
      price={product.price}
      description={product.description}
      id={product.id}
      category={product.category}
      image={product.image}
    />
    </div>
    <div className="p-4 lg:p-2 lg:border-base-300 lg:border lg:rounded-xl lg:col-span-1">
    <AddOrder
      productId = {product.id}
    /> 
    </div>
    </div>
    <ProductList/>
    </main>
  )
}
