import axios from "axios";

export async function axioser(path: string) {
  const req: any = await axios(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);

  const data: any = await req.json();
  return data;
}
