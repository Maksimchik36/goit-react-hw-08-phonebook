import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './RegisterPage.styled';

const RegisterPage = () => {
  const token = useSelector(state => state.user.token)
  

  return (
    <Container>
      <RegisterForm></RegisterForm>
      {token && <Navigate to="/adding" replace /> }      
    </Container>
  )
}

export default RegisterPage;