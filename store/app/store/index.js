
export async function getBanner() {
  try{
    const res = await fetch(`${process.env.HOST}api/banner`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }catch(error){
    console.log(error)
  }
}
