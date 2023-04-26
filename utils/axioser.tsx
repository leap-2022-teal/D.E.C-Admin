import axios from "axios";

<<<<<<< HEAD
export async function axioser(path: string) {
  const req: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);
  return req;
=======
<<<<<<< HEAD
export async function axioser(path: string, reqType: string) {
  const req: any = await axios(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);

  const data: any = await req.json();
  return data;
}

export async function postAxios(path: string, reqType: string) {
  const req: any = await axios(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);

  const data: any = await req.json();
  return data;
=======
export async function axioser(path: string) {
  const req: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);
  return req;
>>>>>>> a1beb0d (color and products edits)
>>>>>>> 5c8456b (color and products edits)
}
