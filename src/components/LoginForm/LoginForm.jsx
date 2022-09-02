import { useState } from 'react';
import { useLoginMutation } from 'redux/userApi';

const LoginForm = () => {
  const [loginFunc, {isLoading}] = useLoginMutation();
  

  const [email, setEmail] = useState('Registration@gmail.com');
  const [password, setPassword] = useState('12345qwe');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunc({email, password});

    // resetForm();
  };

  // const resetForm = () => {
  //   setEmail('');
  //   setPassword('');    
  // }


  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', columnGap: 10,}}>
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

export default LoginForm;