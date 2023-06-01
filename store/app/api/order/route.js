
import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function GET() {
  const product = await prisma.product.findMany(
    {
      include: {
        product:true
      }
    }
  )
  return NextResponse.json({ data: product });
}

export async function POST(request) {
  const res = await request.json()
  const date = new Date()
  const uuid = date.getUTCFullYear().toString() + date.getUTCMonth.toString() + date.getUTCDay().toString()
  if(!res.product){
    throw new Response(JSON.stringify({"message": "Product Is Missing"}),{status: 400})
  }
  const product = await prisma.product.findFirst({where:{id: parseInt(res.product)}})
  if(!product){
    throw new Response(JSON.stringify({"message": "Product Is Missing"}),{status: 400})
  }
  const data = await prisma.order.create({
    data:{
      uuid,
      name: res.name,
      address: res.address,
      phone: res.phone,
      notes: res.notes,
      product_name: product.name,
      price: parseInt(product.price),
      productId: res.product
    },
    include:{
      product:true
    }
  })
  return NextResponse.json({ data });
}
