
import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.order.findMany(
    {
      include: {
        product:true
      }
    }
  )
  console.log(data)
  return NextResponse.json({ data });
}

export async function POST(request) {
  const res = await request.json()
  const date = new Date()
  const uuid = date.getUTCFullYear().toString() + date.getUTCMonth().toString() + date.getUTCDay().toString()
  if(!res.product){
    throw new Response(JSON.stringify({"message": "Product Is Missing"}),{status: 400})
  }
  const product = await prisma.product.findFirst({where:{id: parseInt(res.product)}})
  if(!product){
    throw new Response(JSON.stringify({"message": "Product Is Missing"}),{status: 400})
  }
  try {
  const data = await prisma.order.create({
    data:{
      uuid,
      name: res.name,
      address: res.address,
      phone: res.phone,
      notes: res.notes,
      product_name: product.name,
      price: parseInt(product.price),
      product: {
        connect:{
          id: product.id
        }
      }
    }
  })
  console.log(data)
  return NextResponse.json({ data });
  } catch (error) {
    console.log(error)
    throw new Response(JSON.stringify({"message": error}), {status: 400})  
  }
}
