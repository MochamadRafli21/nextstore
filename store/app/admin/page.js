
import { getOrder } from "../store/order";

import Link from "next/link";
import OrderTable from "@/components/admin/orderTable";

export default async function Admin() {
  const resO = await getOrder()
  const orderList = resO? resO.data: [];
  return (
    <>
    <main className="h-full flex flex-col items-center justify-between p-2">
    <div className="w-full md:w-1/2 justify-start m-1 text-base-content text-lg font-bold">

    <div className="flex justify-between mt-2">
    <h1>
    Daftar Pesanan
    </h1>
    <Link href="/admin/order/add">
    <button className="btn btn-accent btn-sm btn-active text-accent-content">
    + Pesanan Baru
    </button>
    </Link>
    </div>

    <OrderTable
    orders = {orderList}
    />
    </div>

    </main>
    </>
  )
}
