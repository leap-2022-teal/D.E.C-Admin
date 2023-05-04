import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Card, Button, Text, Input, Row, Checkbox, Container } from "@nextui-org/react";
import { getProviders, getSession, signIn } from "next-auth/react";

export default function SignIn({ providers }: any) {
  const email = useRef("");
  const password = useRef("");

  return (
    <div>
      <Container display="flex" alignItems="center" justify="center" css={{ minHeight: "100vh" }}>
        <Card css={{ mw: "420px", p: "20px" }} variant="bordered">
          <Text
            size={24}
            weight="bold"
            css={{
              as: "center",
              mb: "20px",
            }}
          >
            Login
          </Text>
          <Input clearable bordered fullWidth color="primary" size="lg" placeholder="Email" onChange={(e) => (email.current = e.target.value)} className="mb-6" />
          <Input clearable bordered fullWidth color="primary" size="lg" placeholder="Password" onChange={(e) => (password.current = e.target.value)} css={{ mb: "6px" }} className="mb-6" />
          <Row className="mb-6" justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>

          <Button
            onPress={() =>
              signIn("credentials", {
                email: email.current,
                password: password.current,
              })
            }
          >
            Sign in
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers,
    },
  };
}
