import React from "react";
import Ball from "./Ball";
import Radial from "./Radial";
import RadialCenter from "./RadialCenter";
import RadialItem from "./RadialItem";
import styled from "styled-components";

const ScoringContainer = styled.div`
    height: 31vh;
    display: flex;
    align-items: flex-end;
`;

const ScoringWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    height: 16vh;
    width: 16vh;
`;

const CenterBall = styled(Ball)`
    font-size: 6vh;
    font-weight: 300;
`;

const OuterBall = styled(Ball)`
    font-size: 3vh;
`;

const Scoring = () => (
    <ScoringContainer>
        <ScoringWrapper>
            <Radial itemSize="medium" distance="14vh">
                <RadialCenter>
                    <CenterBall scoreTerm="Par" score="4" />
                </RadialCenter>
                <RadialItem angle={-90}>
                    <OuterBall scoreTerm="Eagle" score="2" />
                </RadialItem>
                <RadialItem angle={-45}>
                    <OuterBall scoreTerm="Birdie" score="3" />
                </RadialItem>
                <RadialItem angle={0}>
                    <OuterBall scoreTerm="Bogie" score="5" />
                </RadialItem>
                <RadialItem angle={45}>
                    <OuterBall scoreTerm="D. Bogie" score="6" />
                </RadialItem>
                <RadialItem angle={90}>
                    <OuterBall scoreTerm="T. Bogie" score="7" />
                </RadialItem>
            </Radial>
        </ScoringWrapper>
    </ScoringContainer>
);

export default Scoring;
