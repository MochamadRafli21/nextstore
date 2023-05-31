'use client'
import React from 'react'
import { deleteCategory } from '@/app/store/category'
import { useRouter } from 'next/navigation'

export default function CategoryDelete(props) {
  const id = props.id
  const router = useRouter()
  async function submitDelete(){
    const res = await deleteCategory(id)
    if(!res){
      throw new Error("Tidak dapat menghapus kategori")
    }
    router.push('/admin/#category')

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

