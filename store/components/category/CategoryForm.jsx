"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { postCategory } from '@/app/store/category';

export default function CategoryForm() {
  const router = useRouter()
  const [payload, setPayload] = useState({})
  async function submitCategory(e){
    e.preventDefault()
    if(payload){
      try {
        const res = await postCategory(payload)
        if(!res.ok){
          throw new Error("Failed to add banner")
        }
        router.push('/admin')
      } catch (error) {
        console.log(error)  
      }
    }
  }

  return (
    <form onSubmit={submitCategory}>
    <div className="gap-2 mt-2 items-center text-base-content">
    
    <label className="label" for="category">
    <span className="label-text">
      Nama Kategori
    </span>
    </label> 
    <input 
      className="input form-control input-bordered input-primary w-full" 
      type="text" 
      name="category" 
      placeholder="Kantor"
      onChange={(e)=>
        setPayload({
          ...payload,
          name: e.target.value
        })
      }
      value={payload.name ? payload.name : ''}
    />


    <label className="label" for="url">
    <span className="label-text">
    Link To Your Image
    </span>
    </label> 
    <input 
      className="input form-control input-bordered input-primary w-full" 
      type="url" 
      name="url" 
      placeholder="www.google.com"
      onChange={(e)=>
        setPayload({
          ...payload,
          image: e.target.value
        })
      }
      value={payload.image ? payload.image : ''}
    />

    </div> 
    <button type="submit" className="btn w-full mt-4 text-primary-content btn-primary">
    Simpan 
    </button>
    </form>
  )
}
