import React from 'react';
import { Container, CardContainer, Card, CardName, CardInfo, Profile, LargeTitle} from './team_elements';

const makeCard = (info) => {
    return(
        <Card>
            <Profile size={100} color={"white"}></Profile>
            <CardName>{info.name}</CardName>
            <CardInfo>{info.occupation}</CardInfo>
        </Card>
    )
}

class Team extends React.Component{
    constructor(){
        super();
        this.state = {
            teamInfo: [
                {name: "Meijke Balay", occupation: "BS Mathematics, UCLA 2021"},
                {name: "Kyle Chan", occupation: "BS Financial Actuarial Mathematics, UCLA 2021"},
                {name: "Duke Hong", occupation: "BS Mathematics of Computation, UCLA 2021"}
            ]
        }
    }

    render(){
        const items = [];
        for(let item of this.state.teamInfo){
            items.push(makeCard(item))
        }
        return(
            <Container id="Team">
                <LargeTitle>Team</LargeTitle>
                <CardContainer>
                    {items}
                </CardContainer>
                <div style={{height: "100px"}}></div>
            </Container>
        )
    }
}

export default Team;