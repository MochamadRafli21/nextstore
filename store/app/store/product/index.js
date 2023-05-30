export async function getProduct(query) {
  let url = `api/product`
  if(query){
    const {q , category}=query
    if(q){
      url += `?q=${q}`
    }
    if(category){
      url += `?category=${category}`
    }
  }

  try{
    const res = await fetch(url);
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}

export async function getProductServer(query) {
  let url = `${process.env.HOST}api/product`
  if(query){
    const {q , category}=query
    if(q){
      url += `?q=${q}`
    }
    if(category){
      url += `?category=${category}`
    }
  }

  try{
    const res = await fetch(url);
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
