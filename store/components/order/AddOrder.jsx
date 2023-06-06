'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import SingleSelect from '../select/singleSelect'
import { postOrder, updateOrder } from '@/app/store/order'

export default function AddOrder({productId , prePayload, isEdit}) {
  const router = useRouter()
  const [products, setProducts] = useState([]) 
  const [payload, setPayload] = useState({})
  const getProduct = async()=>{
    if(!prePayload){
    setPayload({
      ...payload,
      product: productId
    })
    }
    const res = await fetch('/api/product')
    if(!res.ok){
      throw new Error("failed to fetch category")
    }
    const data = await res.json()
    setProducts(data?data.data:[])
  }
  useEffect(()=>{
    if(prePayload){
      const p = prePayload
      delete p.id
      delete p.uuid
      delete p.productId
      setPayload({
        ...p,
        product: prePayload.productId
      })
    }
    getProduct()
  },[])

  const updateProduct= (value)=>{
    setPayload({
      ...payload,
      product:parseInt(value)
    })
  }
  async function submitOrder(e){
    e.preventDefault()
    if(payload){
      try {
        if(!isEdit){
          const res = await postOrder(payload)
          if(!res.ok){
            throw new Error("Failed to Submit Order")
          }
          const selectedProduct = products.reduce(function(filtered, product){
            if(product.id == payload.product){
              filtered = product
            }
            return filtered
          })
          router.push(`https://wa.me/${payload.phone}?text=${encodeURI('Saya Ingin Memesan '+selectedProduct.name+ ' dengan harga '+payload.price)}`)
        }else{
          const res = await updateOrder(prePayload.id, payload)
          if(!res.ok){
            throw new Error("Failed to update order")
          }
        }
      } catch (error) {
        console.log(error)  
      }
    }
  }
  return (
    <form onSubmit={submitOrder}>
    <div className="gap-2 mt-2 items-center text-base-content">
    <SingleSelect
      title="Product"
      options={products?products:[]}
      selectedOptions={payload.product}
      setSelected={updateProduct}
      isDisabled={payload.product && !prePayload? true : false}
    />    
    
    <label className="label" for="name">
    <span className="label-text">
      Nama Penerima
    </span>
    </label> 
    <input 
      className="input form-control input-bordered input-primary w-full" 
      type="text" 
      name="name" 
      placeholder="Achmad Zainudin"
      onChange={(e)=>
        setPayload({
          ...payload,
          name: e.target.value
        })
      }
      required
      value={payload.name ? payload.name : ''}
    />

    <label className="label" for="phone">
    <span className="label-text">
      Nomor Penerima(Whatsapp)
    </span>
    </label> 
    <input 
      required
      className="input form-control input-bordered input-primary w-full" 
      type="number" 
      name="phone" 
      placeholder="8510000000"
      onChange={(e)=>
        setPayload({
          ...payload,
          phone: e.target.value
        })
      }
      value={payload.phone ? payload.phone : ''}
    />

    <label className="label" for="address">
    <span className="label-text">
      Alamat Penerima
    </span>
    </label> 
    <textarea
      required
      className="textarea textarea-sm form-control textarea-primary w-full" 
      type="text" 
      name="address" 
      placeholder="Jln.Sekelimus no 4, Keluarahan cipagaloh kecamatan cipagaloh Kota Bandung"
      onChange={(e)=>
        setPayload({
          ...payload,
          address: e.target.value
        })
      }
      value={payload.address ? payload.address : ''}
    />

    <label className="label" for="address">
    <span className="label-text">
      Catatan Penerima
    </span>
    </label> 
    <textarea 
      className="textarea textarea-sm form-control textarea-primary w-full" 
      type="text" 
      name="notes" 
      placeholder="Rumah Warna Biru"
      onChange={(e)=>
        setPayload({
          ...payload,
          notes: e.target.value
        })
      }
      value={payload.notes ? payload.notes : ''}
    />

    </div> 
    <button type="submit" className="btn w-full mt-4 text-primary-content btn-primary">
    Simpan 
    </button>
    </form>
  )
}
