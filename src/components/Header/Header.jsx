import { HeaderSt, NavLinkSt, NavWrapSt } from './Header.styled';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu';

const Header = () => {
  // token является оригинальным кдючем для каждого пользователя
  const token = useSelector(state => state.user.token)


  return <HeaderSt>
    <NavWrapSt>
      {!token && <NavLinkSt to="/login">Login</NavLinkSt>}
      {!token && <NavLinkSt to="/register">Register</NavLinkSt>}
      {token && <NavLinkSt to="/adding">AddContact</NavLinkSt>}
      {token && <NavLinkSt to="/contacts">Contacts</NavLinkSt>}
      {token && <UserMenu />}
    </NavWrapSt>
  </HeaderSt>
}

export default Header;