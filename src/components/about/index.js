import React from 'react';
import {Container, FlexContainer, TitleBox, InfoBox, DescBox, Image, SectionContainer} from './about_elements';
import mctsSVG from '../../img/mcts.svg';
import nnPNG from '../../img/nn.png';

const info = [
    {title: "Policy and Value Network", desc: "BokeGo's policy network takes in 27 9x9 input layer and outputs 9x9 probability distribution. Using the same input and convolution layers, BokeGo's value network quantifies actions and board positions."},
    {title: "Monte Carlo Tree Search", desc: "BokeGo uses MCTS to estimate action values with random simulations with rollouts under the UCT (Upper Confidence bound for Trees) Policy. The value network evaluates each rollout simulation to give the best move to play"}
]

const Section = (image, info) => {
    return (
        <Container>
            <FlexContainer>
                <Image src={image}></Image>
            </FlexContainer>
            <hr></hr>
            <FlexContainer>
                <InfoBox>
                    <TitleBox>{info.title}</TitleBox>
                    <DescBox>{info.desc}</DescBox>
                </InfoBox>
            </FlexContainer>
        </Container>
    )
}

class About extends React.Component{
    render(){
        return(
            <SectionContainer id="About">
                {Section(nnPNG, info[0])}
                {Section(mctsSVG, info[1])}
            </SectionContainer>
        )
        
    }
}

export default About;