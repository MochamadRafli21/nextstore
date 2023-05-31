"use client"
import React, { useState } from 'react'
import { postBanner } from "@/app/store"
import { useRouter } from 'next/navigation';

export default function BannerForm() {
  const router = useRouter()
  const [image, setImage] = useState("")
  async function submitBanner(e){
    e.preventDefault()
    if(image){
      const payload = {
        url: image
      }
      try {
        const res = await postBanner(payload)
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
    <form onSubmit={submitBanner}>
    <div className="gap-2 mt-2 items-center text-base-content">
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
      onChange={(e)=>setImage(e.target.value)}
      value={image}
    />

    </div> 
    <button type="submit" className="btn w-full mt-4 text-primary-content btn-primary">
    Simpan 
    </button>
    </form>
  )
}
