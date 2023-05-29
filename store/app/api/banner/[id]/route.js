export async function DELETE(_,{params}) {
  const id = parseInt(params.id)
  const data = await prisma.banner.delete({
    where: {
      id
    } 
  }) 
  return NextResponse.json({ data });
}
