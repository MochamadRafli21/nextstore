import React from 'react'
import ProductCard from './productCard'
import { getProductServer } from '@/app/store/product'

export default async function ProductList(props) {
  const name = props ? props.name : '';
  const category = props ? props.categoryName :"";
  const resP = await getProductServer({q:name, category:category})
  const productList = resP ? resP.data : [];
  return (
    <>
    <div className='bg-base-100 w-full md:w-3/4 m-4 rounded-xl text-primary-content'>
    <div className='pt-2 w-full p-4 grid gap-4 grid-cols-2 md:grid-cols-3'>
    {productList.length ? productList.map((product) => 
      <ProductCard
      id = {product.id}
      name = {product.name}
      price = {product.price}
      image = {product.image}
      isHighlight = {product.isHighlight}
      description = {product.description}
      />  
    ):
      <p>Produk tidak ditemukan</p>
    }
    </div>   
    </div>
    </>
  )
}
