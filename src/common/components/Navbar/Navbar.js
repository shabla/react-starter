import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    height: 50px;
    background: #272727;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Navbar = () => {
    return (
        <StyledNavbar>
            Hi, I'm a navbar
        </StyledNavbar>
    )
}

export default Navbar;