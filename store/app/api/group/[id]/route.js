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

export async function GET(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.group.findFirst({
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
  let data ={}
  if(res.category){
  const ids = await res.category.map((cId)=>{
    if(cId){
      return {id: cId}
    }
  })
  if(!ids){
    throw new Response(JSON.stringify({"message": "Category Cant Be Found"}),{status: 400})
  }
    data = {
      ...res,
      category:{
        connect:ids
      }
    }
  }else{
    data ={
      ...res
    }
  }
  await prisma.group.update({
    data:{
      category:{
        set:[]
      }
    },
    where: {
      id
    }
  }) 
  const req = await prisma.group.update({
    data,
    where: {
      id
    }
  }) 
  return NextResponse.json({ data:req });
}
