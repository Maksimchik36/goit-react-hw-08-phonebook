import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from 'components/PrivateRoutes';
import { useSelector } from 'react-redux';
// import AddContactPage from 'pages/AddContactPage';
// import ContactsPage from 'pages/ContactsPage';
import Header from 'components/Header';
import Loader from 'components/Loader';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';

import { useCurrentUserQuery } from 'redux/userApi';
import Home from 'components/Home';

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
    <div>
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
      </Suspense>
    </div>
    // <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    // >
      // React homework template
    // </div>
  );
};


export default App;