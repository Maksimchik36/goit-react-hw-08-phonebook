import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm';
import React from 'react';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const token  = useSelector(state => state.user.token)

  
  return (
    <>
      <LoginForm></LoginForm>
      {token && <Navigate to="/" replace />}
    </>
  )
}

export default LoginPage;