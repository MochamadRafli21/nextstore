import AddOrder from "@/components/order/AddOrder"
import { getOrderDetail } from "@/app/store/order"
import { notFound } from "next/navigation"

export default async function Product({params: {id}}) {
  const orderDetail = await getOrderDetail(parseInt(id))
  if(!orderDetail){
    throw notFound()
  }
  const data = orderDetail.data
  delete data.uuid
  return (
    <main className="flex flex-col items-center justify-between">
    <AddOrder
      isEdit={true}
      prePayload = {orderDetail.data}
    /> 
    </main>
  )
}
