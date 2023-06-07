
import { getProductServer } from "../../store/product"

import Link from "next/link";
import ProductTable from "@/components/admin/productTable";

export default async function Admin() {
  const resP = await getProductServer()
  const productList = resP ? resP.data: [];
  return (
    <main className="h-full flex flex-col items-center justify-between p-2">

    <div className="w-full md:w-1/2 justify-start m-1 text-base-content text-lg font-bold">
    <div className="flex justify-between mt-2">
    <h1>
    Daftar Produk
    </h1>
    <Link href="/admin/product/add">
    <button className="btn btn-accent btn-sm btn-active text-accent-content">
    + Produk Baru
    </button>
    </Link>
    </div>

    <ProductTable
    products = {productList}
    />
    </div>

    </main>
  )
}
