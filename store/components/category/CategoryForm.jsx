"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { postCategory } from '@/app/store/category';
import MultySelect from '../select/multipleSelect';
import SingleSelect from '../select/singleSelect';

export default function CategoryForm({resP, data}) {
  const router = useRouter()
  const [payload, setPayload] = useState({})
  const [products, setProducts] = useState(data? data.product:[])
  const currentHighlight = data ? data.isHighlight : false
  const [highlight, setHighlight] = useState(currentHighlight? "Tampilkan": "Sembunyikan")
  const updateHighlight = (value)=>{
    if(value == "Tampilkan"){
      setHighlight("Tampilkan")
      setPayload({
        ...payload,
        isHighlight: true
      })
    }else{
      setHighlight("Sembunyikan")
      setPayload({
        ...payload,
        isHighlight: false
      })
    }
  }
  const updateProduct = (products)=>{
    const productIds = products.map((item)=>{
      return item.id
    })
    setProducts(products)
    setPayload({
      ...payload,
      product: productIds
    })
  }
  async function submitCategory(e){
    e.preventDefault()
    if(payload){
      try {
        const res = await postCategory(payload)
        if(!res.ok){
          throw new Error("Failed to add banner")
        }
        router.push('/admin')
        router.refresh('')
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

    <label className="label" for="product">
    <span className="label-text">
      Product
    </span>
    </label> 
    <MultySelect
      options={resP? resP: []}
      selectedOptions={products}
      setSelected={updateProduct}
    />

    <label className="label" for="isHighlight">
    <span className="label-text">
      Highlight Kategori di halaman utama
    </span>
    </label> 
    <SingleSelect
    options={[{name:"Tampilkan"}, {name:"Sembunyikan"}]}
      selectedOptions={highlight}
      setSelected={updateHighlight}
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
