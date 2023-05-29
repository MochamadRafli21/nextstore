export async function getProduct() {
  try{
    const res = await fetch(`${process.env.HOST}api/product`);
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}

export async function getProductDetail(id) {
  try{
    const res = await fetch(`${process.env.HOST}api/product/${parseInt(id)}`);
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}
