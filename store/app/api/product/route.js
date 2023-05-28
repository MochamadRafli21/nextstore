import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function GET() {
  const product = await prisma.product.findMany({
    include:{category:true}
  }) 
  return NextResponse.json({ data: product });
}

export async function POST(request) {
  const res = await request.json()
  if(!res.name){
    return new Response("Product Name Cant be empty!", {status:400})
  }
  const data = await prisma.product.create({
    data:{
      name: res.name,
      image: res.image,
      description: res.description,
      categoryId: res.categoryId,
      published: res.publish,
    },
    include:{
      category:true
    }
  }) 
  return NextResponse.json({ data });
}