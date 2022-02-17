import React from 'react';
import styled from 'styled-components';
import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";

//UNFINISHED

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLogo to-"/">
                    logo
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/aboutus">
                        About Us
                    </NavLink>
                    <NavLink to="/contactus">
                     Contact Us
                    </NavLink>
                    <NavLink to="/signin">
                        Sign In
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar;