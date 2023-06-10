import React from 'react'
import ProductCard from '@/components/productCard'
import { getProductServer } from '@/app/store/product'

export default async function ProductList(props) {
  const name = props ? props.name : '';
  const category = props ? props.categoryName :"";
  const resP = await getProductServer({q:name, category:category})
  const productList = resP ? resP.data : [];
  return (
    <>
    <div className='w-full rounded-xl text-primary-content'>
    <div className='pt-2 w-full p-4 grid grid-cols-2 md:gap-2 lg:gap-6 md:flex md:flex-grow md:flex-wrap md:justify-start'>
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
