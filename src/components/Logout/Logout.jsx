import { useLogoutMutation } from '../../redux/userApi';

const Logout = () => {
  const [logoutFunc] = useLogoutMutation();

  const handleLogoutClick = () => {
     logoutFunc();
  };

  return (
    <div >
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default Logout;