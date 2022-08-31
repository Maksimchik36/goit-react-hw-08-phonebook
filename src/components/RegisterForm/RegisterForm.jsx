import { useState } from 'react';
import { useSignupMutation } from 'redux/userApi';

const RegisterForm = () => {
  const [signupFunc, status] = useSignupMutation();
  const { isLoading } = status;
  const [name, setName] = useState('Registration2');
  const [email, setEmail] = useState('Registration2@gmail.com');
  const [password, setPassword] = useState('12345qwe');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Register name:', name);
    console.log('Register email:', email);
    console.log('Register password:', password);

    // const newUser = {name, email, password}
    // console.log("newUser", newUser);
    signupFunc({name, email, password});

    // resetForm();
  };

  // const resetForm = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');    
  // }


  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', columnGap: 10,}}>
      <label>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={handleChangeName}
        />
          </label>
          
      <label>
        <span>Email</span>
        <input
          type='text'
          value={email}
          onChange={handleChangeEmail}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type='password'
          value={password}
          onChange={handleChangePassword}
        />
      </label>

      <button type='submit' disabled={isLoading}>login</button>
    </form>
  );
};

export default RegisterForm;