import axios from "axios";

export async function axioser(path: string, reqType: string) {
  const req: any = await axios(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);

  const data: any = await req.json();
  return data;
}

export async function postAxios(path: string, reqType: string) {
  const req: any = await axios(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);

  const data: any = await req.json();
  return data;
}
