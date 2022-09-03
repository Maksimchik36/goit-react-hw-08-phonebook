import { useState } from 'react';
import { useLoginMutation } from 'redux/userApi';
import { Form, Label, Input, Button } from './LoginForm.styled';

const LoginForm = () => {
  // хук из Api при логинизации
  const [loginFunc, {isLoading}] = useLoginMutation();  

  const [email, setEmail] = useState('Registration37@gmail.com');
  const [password, setPassword] = useState('12345qwe');

  // сохраняет данные, введенные в поля формы
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  // отправляет данные в Redux state
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunc({email, password});
    resetForm();
  };

  // очищает поля формы
  const resetForm = () => {
    setEmail('');
    setPassword('');    
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Label>Email
        <Input
          type='text'
          value={email}
          onChange={handleChangeEmail}
        />
      </Label>

      <Label>Password
        <Input
          type='password'
          value={password}
          onChange={handleChangePassword}
        />
      </Label>

      <Button type='submit' disabled={isLoading}>login</Button>
    </Form>
  );
};

export default LoginForm;