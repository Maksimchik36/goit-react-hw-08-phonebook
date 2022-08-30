import { HeaderSt, NavLinkSt, NavWrapSt } from './Header.styled';

const Header = () => {
  return <HeaderSt>
    <NavWrapSt>
      <NavLinkSt to="/login">Login</NavLinkSt>
      <NavLinkSt to="/register">Register</NavLinkSt>
      <NavLinkSt to="/adding">AddContact</NavLinkSt>
      <NavLinkSt to="/contacts">Contacts</NavLinkSt>
      <NavLinkSt to="/logout">Logout</NavLinkSt>
    </NavWrapSt>
  </HeaderSt>
}

export default Header;