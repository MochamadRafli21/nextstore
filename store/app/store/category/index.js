export async function getCategory() {
  try{
    const res = await fetch(`${process.env.HOST}api/category`,
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}

export async function postCategory(payload) {
  try{
    const res = await fetch(
      `/api/category`,
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

export async function deleteCategory(id) {
  if(!id){
    throw new Error("Id is missing")
  }
  try{
    const res = await fetch(`/api/category/${id}`,
      {
        method: "DELETE"
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
