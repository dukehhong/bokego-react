import styled from 'styled-components';
import { IoPersonCircleOutline } from 'react-icons/io5'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;

    @media screen and (max-width: 768px){
        padding: 3rem 0;
    }
`

export const CardContainer = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    flex: 1 1 0;
    padding: 3rem;
    margin: 1rem;
`

export const Profile = styled(IoPersonCircleOutline)`
    color: white;
    
`

export const CardInfo = styled.div`
    color: white;
`

export const CardName = styled.h1`
    color: white;
    padding-top: 2rem;
    padding-bottom: 1rem;
`

export const LargeTitle = styled.h1`
    color: white;
    font-size: 60px;
`