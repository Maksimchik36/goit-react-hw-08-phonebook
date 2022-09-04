import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from 'components/PrivateRoutes';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import Loader from 'components/Loader';
import { useCurrentUserQuery } from 'redux/userApi';
import Home from 'components/Home';
import { Container } from './App.styled';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddContactPage = lazy(() => import('../../pages/AddContactPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));


const App = () => {
  const { token } = useSelector((state) => state.user);
  // if isn't token - skip render. otherwise - get last user data
  useCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <Container>
      <Header></Header>

      <Suspense fallback={<Loader />}>
        
        <Routes>        
          <Route path="/" element={ <Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<PrivateRoutes />}>       
            <Route path="/adding" element={<AddContactPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>          
          <Route path ="*" element={<LoginPage />} />
        </Routes>      
        <ToastContainer />
      </Suspense>
    </Container>
  );
};


export default App;