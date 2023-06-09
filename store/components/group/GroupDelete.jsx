'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { deleteGroup } from '@/app/store/group'
export default function GroupDelete(props) {
  const id = props.id
  const router = useRouter()
  async function submitDelete(){
    const res = await deleteGroup(id)
    if(!res){
      throw new Error("Tidak dapat menghapus kategori")
    }
    router.push('/admin/group')
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

