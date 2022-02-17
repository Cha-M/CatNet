import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const NavLogo = styled(Link)`
    cursor: pointer;
    font-size: 20px;
`

export const NavLink = styled(Link)`
    color: #b47153;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
    color: #fff;
}
`

export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
    display: none;
`

export const NavBtnLink = styled(Link)`
border-radius: 5px;
cursor:pointer;
margin-left: 24px;`

