import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
heigth: 80px;
width: 100%;
padding: 16px;

`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 12px;

  &.active {
    color: red;
  }
`;
