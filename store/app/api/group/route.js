import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server';
import { Prisma } from "@prisma/client";

export async function GET() {
  const group = await prisma.group.findMany({
    include:{
      category:true
    }
  }) 
  return NextResponse.json({ data: group });
}

export async function POST(request) {
  const res = await request.json()
  if(!res.name){
    return new Response("Group Name Cant be empty!", {status:400})
  }
  let ids =[]
  if(res.category){
    res.category.map((id)=>{
      ids = [...ids, {id:id}]
    })
  }
  try {
    const data = await prisma.group.create({
      data:{
        name: res.name,
        category: {
          connect: ids
        }
      }
    }) 
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error)
    if(error instanceof Prisma.PrismaClientKnownRequestError){
      return new Response(JSON.stringify({code:error.code, message:error.message}), {status:400})
    }
  }
}
