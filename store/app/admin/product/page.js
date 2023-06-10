
import { getProductServer } from "@/app/store/product"

import Link from "next/link";
import ProductTable from "@/components/admin/productTable";

export default async function Admin() {
  const resP = await getProductServer()
  const productList = resP ? resP.data: [];
  return (
    <main className="h-full flex flex-col items-center justify-between">
    <div className="w-full bg-primary flex justify-between p-2 text-primary-content">
    <h1 className="font-bold text-lg">
    Daftar Produk
    </h1>
    <Link href="/admin/product/add">
    <button className="btn btn-accent btn-sm btn-active">
    + Produk Baru
    </button>
    </Link>
    </div>

    <div className="m-2 text-base-content text-lg font-bold">
    <ProductTable
    products = {productList}
    />
    </div>

    </main>
  )
}
