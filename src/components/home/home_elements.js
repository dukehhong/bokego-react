import styled from 'styled-components';
import {SiGithub} from 'react-icons/si';

export const Board = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.9;
    padding-left: 3rem;
    padding-right: 3rem;

    @media screen and (max-width: 768px){
        padding: 0;
        padding-top: 2rem;
        display: none;
    } 
`
export const Container = styled.div`
    display: flex;
    padding-bottom: 3rem;
    justify-content: center;
    max-height: 70vh;
    padding: 3rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        padding-bottom: 3rem;
    } 
`

export const FlexContainer = styled.div`
    max-width: 600px;
    width: 100%;
    color: white;
`

export const HomeH1 = styled.h1`
    font-size: 70px;
    color: white;
    
    @media screen and (max-width: 768px){
        font-size: 50px;
    } 
`

export const HomeH2 = styled.h2`
    font-size: 25px;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 25px;
    } 
`

export const GitButton = styled.button`
    background: rgba(255,255,255,0);
    display: flex;
    padding: 1rem;
    margin-top 3rem;
    border: 2px solid white;
    border-radius: 1rem;
    max-width: 340px;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: 100%;
        margin-top: 1rem;
    }

    &:hover {
        background-color: black;
        opacity: 1;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }
`

export const GitHubIcon = styled(SiGithub)`
    color: white;
    margin-right: 1rem;
`
export const LinkText = styled.h1`
    color: white;
    font-size: 40px;
`