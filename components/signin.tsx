import React, { useState } from 'react';
import { useRouter } from 'next/router'

import {
  Card,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import axios from 'axios';


export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()


  function handleLogin(form:any, e:any) {
    // e.preventDefault();
    axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { email, password })
            .then((res) => {
              
                const { data, status } = res;
                console.log(data)
                if (status === 200) {
                    // const { token } = data;
                    // localStorage.setItem("loginToken", token);
                    // window.location.reload();
                    router.push('/products')
                }
            })
            .catch((error) => {
                if (error.message) {
                    alert("Нэвтрэх нэр эсвэл нууц үг буруу байна ");
                }
            });
  }
  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card  css={{ mw: '420px', p: '20px' }} variant="bordered">
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Login
          </Text>
          <Input
            clearable
            bordered            
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          className='mb-6'
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            css={{ mb: '6px' }}
            className='mb-6'
          />
          <Row className='mb-6' justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        
          <Button onClick={handleLogin}>Sign in</Button>
        </Card>
      </Container>
    </div>
  );
}