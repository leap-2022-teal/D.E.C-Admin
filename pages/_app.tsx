import MainLayout from "@/components/MainLayout";
import Signin from "@/components/signin";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const [loginStatus, setLoginStatus] = useState("unknown");

  // useEffect(() => {
  //   const token = localStorage.getItem("loginToken");
  //   if (token) {
  //     setLoginStatus("in");
  //   } else {
  //     setLoginStatus("out");
  //   }
  // });

  // if (loginStatus === "unknown") return null;

  // if (loginStatus === "out") {
  //   return <Signin />;
  // } else {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
// }
