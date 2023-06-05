export async function postOrder(payload) {
  try{
    const res = await fetch(
      `/api/order`,
      {
        method:"POST",
        body: JSON.stringify(payload)
      }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res;
  }catch(error){
    console.log(error)
  }
}

export async function getOrder() {
  let url = `${process.env.HOST}api/order`

  try{
    const res = await fetch(url, {cache: 'no-store'});
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}
