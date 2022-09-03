import React from 'react';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/userApi';
import { Container, Text } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const userName = useSelector(state => state.user.name);

  // хук разлогинивания
  const [logoutFunc] = useLogoutMutation();

  const handleLogoutClick = () => {
     logoutFunc();
  };


  return (
      <Container>
          <Text>{userName}</Text>
      <LogoutIcon style={{cursor: "pointer", color: 'red'}} onClick={handleLogoutClick}/>
    </Container>
  )
}

export default UserMenu;