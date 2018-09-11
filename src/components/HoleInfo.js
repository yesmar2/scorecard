import React from "react";
import styled from "styled-components";

const HoleInfoWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 auto;
`;

const Stat = styled.div`
    flex: 1;
`;

const Hole = styled.div`
    flex: 2;
`;

const StatValue = styled.div`
    text-align: center;
    font-size: 1.8rem;
`;

const StatDescription = styled.div`
    text-align: center;
    font-size: 0.9rem;
`;

const HoleNumber = styled.h3`
    margin: 0;
    font-size: 1.3rem;
    text-align: center;
    font-weight: normal;
`;

const Yards = styled.p`
    margin: 0;
    font-size: 0.9rem;
    text-align: center;
    font-weight: normal;
`;

const HoleInfo = props => (
    <HoleInfoWrapper>
        <i className="material-icons">keyboard_arrow_left</i>
        <Stat>
            <StatValue>4</StatValue>
            <StatDescription>Par</StatDescription>
        </Stat>
        <Hole>
            <HoleNumber>Hole 1</HoleNumber>
            <Yards>365 yards</Yards>
        </Hole>
        <Stat>
            <StatValue>3</StatValue>
            <StatDescription>Hcp</StatDescription>
        </Stat>
        <i className="material-icons">keyboard_arrow_right</i>
    </HoleInfoWrapper>
);

export default HoleInfo;
