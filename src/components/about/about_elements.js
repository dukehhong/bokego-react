import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 3rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 1rem;
    } 
`

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px){
        padding-left: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`

export const Image = styled.img`
    width: 100%;
    padding: 1rem;
    padding-right: 3rem;
    height: auto;

    @media screen and (max-width: 768px){
        padding-left: 0;
    }
`
export const InfoBox = styled.div`
    padding-left: 3rem;

    @media screen and (max-width: 768px){
        padding-left: 0;
    }
`

export const TitleBox = styled.h1`
    color: black;
    font-size: 40px;
    padding-bottom: 1rem;
`

export const DescBox = styled.div`
    font-size: 20px;
`

export const SectionContainer = styled.div`
    padding: 3rem;
    background-color: white;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`
