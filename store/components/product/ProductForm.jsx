"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { postProduct } from '@/app/store/product';
import formatter from '@/utils/formater';
import SingleSelect from '../select/singleSelect';

export default function CategoryForm() {
  const router = useRouter()
  const [categories, setCategories] = useState([])
  const [payload, setPayload] = useState({})
  async function submitProduct(e){
    e.preventDefault()
    if(payload){
      try {
        const price = parseInt(payload.price.replace(/[\D\s\._\-]+/g, ""))
        const actual_payload = {
          ...payload,
          price
        }
        const res = await postProduct(actual_payload)
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
  const fetchCategory = async ()=>{
    const res = await fetch('/api/category')
    if(!res.ok){
      throw new Error("failed to fetch category")
    }
    const data = await res.json()
    setCategories(data?data.data:[])
  }

  useEffect(()=>{
    fetchCategory()
    },[]
  )

  const updateCategory= (value)=>{
    setPayload({
      ...payload,
      categoryId:parseInt(value)
    })
  }
  return (
    <form onSubmit={submitProduct}>
    <div className="gap-2 mt-2 items-center text-base-content">
    
    <label className="label" for="product">
    <span className="label-text">
      Nama
    </span>
    </label> 
    <input 
      className="input form-control input-bordered input-primary w-full" 
      type="text" 
      name="product" 
      placeholder="Kursi Kantor"
      onChange={(e)=>
        setPayload({
          ...payload,
          name: e.target.value
        })
      }
      value={payload.name ? payload.name : ''}
    />


    <label className="label" for="description">
    <span className="label-text">
      Deskripsi
    </span>
    </label> 
    <textarea 
      className="textarea h-16 form-control input-bordered input-primary w-full" 
      type="text" 
      name="description" 
      placeholder="Kursi Kantor yang sangat bagus"
      onChange={(e)=>
        setPayload({
          ...payload,
          description: e.target.value
        })
      }
      value={payload.description ? payload.description : ''}
    ></textarea>


    <label className="label" for="product">
    <span className="label-text">
      Price
    </span>
    </label> 
    <input 
      className="input form-control input-bordered input-primary w-full" 
      type="text" 
      name="price"
      min={0}
      placeholder="100,000.00"
      onChange={(e)=>{
          let aTPrice = e.target.value.replace(/[\D\s\._\-]+/g ,"")
          aTPrice = aTPrice?parseInt(aTPrice):0
          setPayload({
          ...payload,
            price: aTPrice?aTPrice:''
          })
        }
      }
      onBlur={()=>
        setPayload({
          ...payload,
            price:formatter.format(payload.price),
        })
      }
      onFocus={
        ()=>{
          setPayload({
            ...payload,
            price: payload.price? payload.price.replace(/[\D\s\._\-]+/g, ''):0
          })
        }
      }
      value={payload.price ? payload.price : null}
    />

    <SingleSelect
      title="Kategori"
      options={categories?categories:[]}
      selected={payload.category}
      setSelected={updateCategory}

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
