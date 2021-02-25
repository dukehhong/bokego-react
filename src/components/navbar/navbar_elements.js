import styled from 'styled-components';
// import {NavLink as Link} from 'react-router-dom';
import {Link} from 'react-scroll';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: rgba(0,0,0, ${p => p.active ? '1' : '0'});
    height: 80px;
    display: flex;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    z-index 10;
    position: sticky;
    top: 0;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 4rem;
    height: 100%;
    cursor: pointer;
    color: white;
    font-size: 20px;

    @media screen and (max-width: 768px){
        padding: 0 2rem;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    // @media screen and (max-width: 768px) {
    //     display: block;
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     transform: translate(-100%, 75%);
    //     font-size 1.8rem;
    //     cursor: pointer;
    // }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`