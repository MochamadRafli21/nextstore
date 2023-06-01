'use client'
import React from 'react'
import { deleteProduct } from '@/app/store/product'
import { useRouter } from 'next/navigation'

export default function ProductDelete(props) {
  const id = props.id
  const router = useRouter()
  async function submitDelete(){
    const res = await deleteProduct(id)
    if(!res){
      throw new Error("Tidak dapat menghapus kategori")
    }
    router.push('/admin/#product')
    router.refresh()
  }
  return (
      <>
        <button
          onClick={submitDelete}
          className='w-full mt-2 btn btn-error text-error-content'
        >
        Hapus
        </button>
      </>
  )
}


