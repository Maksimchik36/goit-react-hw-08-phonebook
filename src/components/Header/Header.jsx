import { HeaderSt, NavLinkSt, NavWrapSt } from './Header.styled';
import { useSelector } from 'react-redux';

const Header = () => {
  const token = useSelector(state => state.user.token)


  return <HeaderSt>
    <NavWrapSt>
      {!token && <NavLinkSt to="/login">Login</NavLinkSt>}
      {!token && <NavLinkSt to="/register">Register</NavLinkSt>}
      {token && <NavLinkSt to="/adding">AddContact</NavLinkSt>}
      {token && <NavLinkSt to="/contacts">Contacts</NavLinkSt>}
      {token && <NavLinkSt to="/logout">Logout</NavLinkSt>}     
    </NavWrapSt>
  </HeaderSt>
}

export default Header;