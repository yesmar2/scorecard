import React from "react";
import HoleInfo from "./HoleInfo";
import Ball from "./Ball";
import Radial from "./Radial";
import RadialCenter from "./RadialCenter";
import RadialItem from "./RadialItem";
import styled from "styled-components";

const MainWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
`;

const Scoring = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    height: 35vw;
    width: 35vw;
    margin-bottom: 1rem;
`;

const Main = () => (
    <MainWrapper>
        <HoleInfo />
        <Scoring>
            <Radial itemSize="medium" distance="25vw">
                <RadialCenter>
                    <Ball scoreTerm="Par" score="4" scoreColor="green" />
                </RadialCenter>
                <RadialItem angle={-90}>
                    <Ball scoreTerm="Eagle" score="2" scoreColor="green" />
                </RadialItem>
                <RadialItem angle={-45}>
                    <Ball scoreTerm="Birdie" score="3" scoreColor="green" />
                </RadialItem>
                <RadialItem angle={0}>
                    <Ball scoreTerm="Bogie" score="5" scoreColor="red" />
                </RadialItem>
                <RadialItem angle={45}>
                    <Ball scoreTerm="D. Bogie" score="6" scoreColor="red" />
                </RadialItem>
                <RadialItem angle={90}>
                    <Ball scoreTerm="T. Bogie" score="7" scoreColor="red" />
                </RadialItem>
            </Radial>
        </Scoring>
    </MainWrapper>
);

export default Main;
