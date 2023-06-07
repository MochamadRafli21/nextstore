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
    <div className="m-4 w-full md:w-3/4 card card-bordered bg-base-100 rounded-xl">
      <div className="card-body" >
        <h1 className="text-accent card-title font-bold rounded-xl ">
          Pesanan    
        </h1>
        <AddOrder
          isAdmin={true}
          isEdit={true}
          prePayload = {orderDetail.data}
        /> 
      </div>
    </div>
    </main>
  )
}
