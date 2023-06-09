export async function getGroup() {
  let url = `${process.env.HOST}api/group`

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

export async function deleteGroup(id) {
  if(!id){
    throw new Error("Id is missing")
  }
  try{
    const res = await fetch(`/api/group/${id}`,
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

export async function postGroup(payload) {
  try{
    const res = await fetch(
      `/api/group`,
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
