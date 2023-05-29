export async function findManyProduct(){
  const product = await prisma.product.findMany({
    include:{category:true}
  })
  return product
}

export async function createProduct(){
  const data = await prisma.product.create({
    data:{
      name: res.name,
      image: res.image,
      description: res.description,
      categoryId: res.categoryId,
      published: res.publish,
      price: res.price
    },
    include:{
      category:true
    }
  })

  return data
}
