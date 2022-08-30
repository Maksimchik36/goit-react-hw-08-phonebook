import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import AddContactPage from 'pages/AddContactPage';
// import ContactsPage from 'pages/ContactsPage';
import Header from 'components/Header';
import Loader from 'components/Loader';
import RegisterPage from 'pages/RegisterPage';

const AddContactPage = lazy(() => import('../../pages/AddContactPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const Logout = lazy(() => import('../Logout'));


const App = () => {
  return (
    <div>
      <Header></Header>

      <Suspense fallback={<Loader />}>
        
        <Routes>        
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/adding" element={<AddContactPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path ="/logout" element={<Logout/>} />          
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