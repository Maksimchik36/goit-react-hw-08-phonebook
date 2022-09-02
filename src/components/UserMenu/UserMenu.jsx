import React from 'react';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/userApi';

const UserMenu = () => {
  const userName = useSelector(state => state.user.name);

  // хук разлогинивания
  const [logoutFunc] = useLogoutMutation();

  const handleLogoutClick = () => {
     logoutFunc();
  };


  return (
      <div style={{display: "flex"}}>
          <p>{userName}</p>
          <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default UserMenu;