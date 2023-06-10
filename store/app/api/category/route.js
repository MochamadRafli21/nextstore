import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';
import { Prisma } from "@prisma/client";

export async function GET() {
  const category = await prisma.category.findMany() 
  return NextResponse.json({ data: category });
}

export async function POST(request) {
  const res = await request.json()
  if(!res.name){
    return new Response("Category Name Cant be empty!", {status:400})
  }
  let productList = []
  if(res.product){
    const products = res.product
    const ids = products.map((item)=>{
      return {id:item}
    })
    productList = ids
  }
  try {
    const data = await prisma.category.create({
      data:{
        name: res.name,
        image: res.image,
        isHighlight: res.isHighlight,
        product: {
          connect: productList
        }
      }
    }) 
    return NextResponse.json({ data }, {status: 201});
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError){
      return new Response(JSON.stringify({code:error.code, message:error.message}), {status:400})
    }
  }
}
