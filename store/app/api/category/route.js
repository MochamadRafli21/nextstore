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
  try {
    const data = await prisma.category.create({
      data:{
        name: res.name,
        image: res.image
      }
    }) 
    return NextResponse.json({ data });
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError){
      return new Response(JSON.stringify({code:error.code, message:error.message}), {status:400})
    }
  }
}
