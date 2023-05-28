import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function GET() {
  const category = await prisma.category.findMany() 
  return NextResponse.json({ data: category });
}

export async function POST(request) {
  const res = await request.json()
  if(!res.name){
    return new Response("Category Name Cant be empty!", {status:400})
  }
  const data = await prisma.category.create({
    data:{
      name: res.name 
    }
  }) 
  return NextResponse.json({ data });
}
