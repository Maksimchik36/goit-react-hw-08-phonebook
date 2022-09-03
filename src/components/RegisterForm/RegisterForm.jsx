import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'redux/userApi';
import { Form, Label, Input, Button } from './RegisterForm.styled';

const RegisterForm = () => {
  // хук при регистрации 
  const [signupFunc, status] = useSignupMutation();
  const { isLoading } = status;

  const navigate = useNavigate();

  const [name, setName] = useState('Registration2');
  const [email, setEmail] = useState('Registration2@gmail.com');
  const [password, setPassword] = useState('12345qwe');

  // сохраняет введенные в input-ы значения
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  // записывает данные в state.user
  const handleSubmit = (e) => {
    e.preventDefault();

    signupFunc({ name, email, password });
    navigate('/contacts');
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');    
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name
        <Input
          type='text'
          value={name}
          onChange={handleChangeName}
        />
          </Label>
          
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

export default RegisterForm;