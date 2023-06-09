import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';

export async function DELETE(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.group.delete({
    where: {
      id
    } 
  }) 
  return NextResponse.json({ data });
}
