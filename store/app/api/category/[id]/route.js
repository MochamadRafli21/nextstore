import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function DELETE(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.category.delete({
    where: {
      id
    } 
  }) 
  return NextResponse.json({ data });
}

export async function PUT(request, {params}) {
  const id = parseInt(params.id)
  const res = await request.json()
  console.log(res)  
  const req = await prisma.category.update({
    data:{
      name: res.name,
      image: res.image
    },
    where: {
      id
    }
  }) 
  return NextResponse.json({ data:req });
}
