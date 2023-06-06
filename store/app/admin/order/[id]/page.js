import AddOrder from "@/components/order/AddOrder"
import { getOrderDetail } from "@/app/store/order"
import { notFound } from "next/navigation"

export default async function Product({params: {id}}) {
  const orderDetail = await getOrderDetail(parseInt(id))
  if(!orderDetail){
    throw notFound()
  }
  console.log(orderDetail)
  return (
    <main className="flex flex-col items-center justify-between">
    <AddOrder
      prePayload = {orderDetail.data}
    /> 
    </main>
  )
}
