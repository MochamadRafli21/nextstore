import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function DELETE(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.order.delete({
    where: {
      id
    } 
  }) 
  return NextResponse.json({ data });
}

export async function GET(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.order.findFirst({
    where: {
      id
    }
  }) 
  return NextResponse.json({ data });
}

export async function PUT(request, {params}) {
  const id = parseInt(params.id)
  const res = await request.json()
  const req = await prisma.order.update({
    data:res,
    where: {
      id
    }
  }) 
  return NextResponse.json({ data:req });
}
