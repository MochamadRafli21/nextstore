import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function GET(request) {
  const {searchParams} = new URL(request.url)
  const catName = searchParams.get('category')
  const pName = searchParams.get('q')
  let payload = {}
  if(catName){
    payload.where = {
      category: {
        name: catName
      }
    }
  }

  if(pName){
    payload.where = {
      ...payload.where,
      name:{
        contains: pName,
        mode: 'insensitive'
      }
    }
  }

  payload = {
    ...payload,
    include:{
      category:true
    }
  }

  const product = await prisma.product.findMany(
    payload
  )
  return NextResponse.json({ data: product });
}

export async function POST(request) {
  const res = await request.json()
  if(!res.name){
    return new Response("Product Name Cant be empty!", {status:400})
  }
  const exist = await prisma.product.findFirst({where:{name:res.name}})
  if(exist){
    return new Response("Product Name is already exist", {status: 400}) 
  }
  const data = await prisma.product.create({
    data:{
      name: res.name,
      image: res.image,
      description: res.description,
      categoryId: res.categoryId,
      published: res.publish,
      price: parseInt(res.price),
    },
    include:{
      category:true
    }
  })
  return NextResponse.json({ data });
}
