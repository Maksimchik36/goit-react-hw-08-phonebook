import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm';
import { Container } from './LoginPage.styled';
import React from 'react';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const token  = useSelector(state => state.user.token)

  
  return (
    <Container>
      <LoginForm></LoginForm>
      {token && <Navigate to="/" replace />}
    </Container>
  )
}

export default LoginPage;