import React from 'react';
import boardSVG from '../../img/board.svg';
import {Container, Board, FlexContainer, HomeH1, HomeH2, GitHubIcon, GitButton} from './home_elements';

class Home extends React.Component{
    handleClick(){
        window.location = "https://github.com/meiji163/bokego";
    }

    render(){
        return (
                <Container id="Home">
                    <FlexContainer>
                        <HomeH1>BokeGo</HomeH1>
                        <HomeH2>9x9 Baduk Deep Learning Model</HomeH2>
                        <GitButton onClick={this.handleClick}>
                            <GitHubIcon size={40}></GitHubIcon>
                            <HomeH2 style={{marginTop: "0.4rem"}}>Documentation</HomeH2>
                        </GitButton>
                    </FlexContainer>

                    <FlexContainer>
                        <Board src={boardSVG}></Board>
                    </FlexContainer>
                </Container>   
        )
    }
}

export default Home;