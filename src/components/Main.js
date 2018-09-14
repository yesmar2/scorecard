import React from "react";
import HoleInfo from "./HoleInfo";
import Scoring from "./Scoring";
import styled from "styled-components";

const MainWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    padding-bottom: 5vw;
`;

const Main = () => (
    <MainWrapper>
        <HoleInfo />
        <Scoring />
    </MainWrapper>
);

export default Main;
