
export async function getBanner() {
  try{
    const res = await fetch(`${process.env.HOST}api/banner`, {
      cache: 'no-store',
      next:{
        revalidate: 5
      }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}

export async function postBanner(payload) {
  try{
    const res = await fetch(
      `/api/banner`,
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

export async function deleteBanner(id) {
  if(!id){
    throw new Error("Id is missing")
  }
  try{
    const res = await fetch(`/api/banner/${id}`,
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
