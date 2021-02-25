import React, { useState } from 'react';
import {Nav, NavLink, NavMenu, Bars} from './navbar_elements';

function Navbar(){
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const createLink = (name) => {
        return(
            <NavLink to={name} smooth={true} duration={1000} style={{color: "white"}} offset={-80}>{name}</NavLink>
        )
    }

    const sections = ["Home", "About", "Team"];
    const items = sections.map((name) => createLink(name));

    return (
        <Nav active={navbar}>
            <Bars />
            <NavMenu>
                {items}
            </NavMenu>
        </Nav>
    )
}

export default Navbar;