export async function getGroup() {
  let url = `${process.env.HOST}api/group`

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

export async function getGroupDetail(id) {
  try{
    const res = await fetch(`${process.env.HOST}api/group/${parseInt(id)}`);
    if (!res.ok) {
    throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}

export async function updateGroup(id, body){
  try{
    const res = await fetch(`/api/group/${parseInt(id)}`, {
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
