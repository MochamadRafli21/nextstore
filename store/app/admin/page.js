
import { getOrder } from "@/app/store/order";

import Link from "next/link";
import OrderTable from "@/components/admin/orderTable";

export default async function Admin() {
  const resO = await getOrder()
  const orderList = resO? resO.data: [];
  return (
    <>
    <main className="h-full flex flex-col items-center justify-between">
    <div className="w-full bg-primary flex justify-between p-2 text-primary-content">
    <h1 className="font-bold text-lg">
    Daftar Pesanan
    </h1>
    <Link href="/admin/order/add">
    <button className="btn btn-accent btn-sm btn-active">
    + Pesanan Baru
    </button>
    </Link>
    </div>

    <div className=" m-2 text-base-content text-lg font-bold">
    <OrderTable
    orders = {orderList}
    />
    </div>

    </main>
    </>
  )
}
