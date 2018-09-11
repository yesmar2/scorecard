import React from "react";
import HoleInfo from "./HoleInfo";
import Scoring from "./Scoring";
import styled from "styled-components";

const MainWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 2rem 2rem 2rem;
`;

const Main = () => (
    <MainWrapper>
        <HoleInfo />
        <Scoring />
    </MainWrapper>
);

export default Main;
