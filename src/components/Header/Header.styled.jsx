import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderSt = styled.div`
text-align: center;
// padding: 20px;
// padding-bottom: 0;
`;

export const NavWrapSt = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
background-color: #d9afd1;
`;

export const NavLinkSt = styled(NavLink)`
font-size: 20px;
font-weight: 700;
color: black;
text-decoration: none;

  &.active {
    color: #83faec;
  }
`;