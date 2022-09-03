import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm';
import React from 'react';
import { useSelector } from 'react-redux';


const RegisterPage = () => {
  const token = useSelector(state => state.user.token)
  

  return (
    <div style={{display: "flex", justifyContent: "center", paddingTop: "20%"}}>
      <RegisterForm></RegisterForm>
      {token && <Navigate to="/adding" replace /> }      
    </div>
  )
}

export default RegisterPage;