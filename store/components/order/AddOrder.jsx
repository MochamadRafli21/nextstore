'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import SingleSelect from '../select/singleSelect'
export default function AddOrder(props) {
  const router = useRouter()
  const [products, setProducts] = useState([]) 
  const [payload, setPayload] = useState({})
  const getProduct = async()=>{
    setPayload({
      ...payload,
      productId: props.productId
    })
    const res = await fetch('/api/product')
    if(!res.ok){
      throw new Error("failed to fetch category")
    }
    const data = await res.json()
    setProducts(data?data.data:[])
  }
  useEffect(()=>{
    getProduct()
  },[])

  const updateProduct= (value)=>{
    setPayload({
      ...payload,
      categoryId:parseInt(value)
    })
  }
  async function submitOrder(e){
    e.preventDefault()
    if(payload){
      try {
        const res = await postOrder(payload)
        if(!res.ok){
          throw new Error("Failed to Submit Order")
        }
        router.push('/')
        router.refresh('')
      } catch (error) {
        console.log(error)  
      }
    }
  }
  return (
    <form onSubmit={submitOrder}>
    <div className='font-bold text-base-content'>
    <h1>Pesan Sekarang</h1> 
    </div>
    <div className="gap-2 mt-2 items-center text-base-content">
    <SingleSelect
      title="Product"
      options={products?products:[]}
      selectedOptions={payload.productId}
      setSelected={updateProduct}
      isDisabled={true}
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
      value={payload.name ? payload.name : ''}
    />

    <label className="label" for="phone">
    <span className="label-text">
      Nomor Penerima(Whatsapp)
    </span>
    </label> 
    <input 
      className="input form-control input-bordered input-primary w-full" 
      type="number" 
      name="851569310923" 
      placeholder="Achmad Zainudin"
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
    <input 
      className="textarea form-control input-bordered input-primary w-full" 
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
    <input 
      className="textarea form-control input-bordered input-primary w-full" 
      type="text" 
      name="notes" 
      placeholder="Jln.Sekelimus no 4, Keluarahan cipagaloh kecamatan cipagaloh Kota Bandung"
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
