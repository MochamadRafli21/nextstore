import React from 'react'
import ProductCard from './productCard'
import { getProduct } from '@/app/store/product'

export default async function ProductList() {
  const resP = await getProduct()
  console.log(resP)
  const productList = resP ? resP.data : [];
  return (
    <>
    <div className='bg-base-100 justify-around w-full md:w-3/4 m-4 rounded-xl text-primary-content'>
    <div className='pt-4 w-full flex flex-wrap justify-evenly md:justify-center'>
    {productList.length ? productList.map((product) => 
      <ProductCard
      id = {product.id}
      name = {product.name}
      price = {product.price}
      image = {product.image}
      isHighlight = {product.isHighlight}
      description = {product.description}
      />  
    ):<p>Produk tidak ditemukan</p>}
    </div>   
    </div>
    </>
  )
}
