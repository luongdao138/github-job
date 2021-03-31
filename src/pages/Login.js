import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container } from '@material-ui/core';
import React from 'react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#cdecee',
      }}
    >
      <Button color='secondary' variant='outlined' onClick={loginWithRedirect}>
        Login / Sign up
      </Button>
    </Container>
  );
};

export default Login;
