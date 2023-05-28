
import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function DELETE(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.product.delete({
    where: {
      id
    } 
  }) 
  return NextResponse.json({ data });
}

export async function GET(_,{params}) {
  console.log(params)
  const id = parseInt(params.id)
  const data = await prisma.product.findFirst({
    where: {
      id
    },
    include:{
      category:true
    }
  }) 
  return NextResponse.json({ data });
}

export async function PUT(request, {params}) {
  const id = parseInt(params.id)
  const res = await request.json()
  const req = await prisma.product.update({
    data:res,
    where: {
      id
    }
  }) 
  return NextResponse.json({ data:req });
}
