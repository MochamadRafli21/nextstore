import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function PUT(request, {params}) {
  const id = parseInt(params.id)
  const res = await request.json()
  if(!res.status){
    throw new Response(JSON.stringify({"message": "status is required"}),{status: 400})
  }
  const req = await prisma.order.update({
    data:{
      status: res.status
    },
    where: {
      id
    }
  }) 
  return NextResponse.json({ data:req });
}
