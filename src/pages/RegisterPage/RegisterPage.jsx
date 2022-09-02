import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm';
import React from 'react';
import { useSelector } from 'react-redux';


const RegisterPage = () => {
  const token = useSelector(state => state.user.token)
  

  return (
    <>
      <RegisterForm></RegisterForm>
      {token && <Navigate to="/adding" replace /> }      
    </>
  )
}

export default RegisterPage;