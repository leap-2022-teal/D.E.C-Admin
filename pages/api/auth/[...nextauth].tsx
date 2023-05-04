import SignIn from "@/components/signin";
import { sign } from "crypto";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NextAuth_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        const { email, password }: any = credentials;
        const res = await fetch("http://localhost:8000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const user = await res.json();
        // console.log(user);
        if (res.ok && user) {
          //   console.log(user);
          return user.one;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      console.log("Token", token);
      console.log("user", user);
      return { ...token, ...user };
    },
    async session({ session, token, user }: any) {
      console.log("session", session);
      console.log("token1", token);
      console.log("user1", user);
      session.user = token;
      console.log(session);
      return session;
    },
    async redirect({}) {
      // Allows relative callback URLs
      // if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url
      return "/";
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
