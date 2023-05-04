import MainLayout from "@/components/MainLayout";
import Signin from "@/components/signIn";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  // const user = session?.user;
  // return
  return <div>wellcome</div>;
}
