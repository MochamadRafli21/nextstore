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
    const res = await fetch(url);
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    const body = await res.json()
    return body;
  }catch(error){
    console.log(error)
  }
}

export async function getOrderDetail(id) {
  try{
    const res = await fetch(`${process.env.HOST}api/order/${parseInt(id)}`);
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}

export async function updateOrder(id, body){
  try{
    const res = await fetch(`/api/order/${parseInt(id)}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res;
  }catch(error){
    console.log(error)
  }

}

export async function updateOrderStatus(id, body){
  if(!body.status){
    throw new Error('Status Field is Required')
  }
  const payload = {
    status: body.status
  }
  try{
    const res = await fetch(`/api/order/${parseInt(id)}/status`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }

}
