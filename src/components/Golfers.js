import React from "react";
import Radial from "./Radial";
import RadialCenter from "./RadialCenter";
import RadialItem from "./RadialItem";
import styled, { css } from "styled-components";

const GolfersContainer = styled.div`
    height: 30vh;
`;

const GolfersWrapper = styled.div`
    height: 20vh;
    width: 20vh;
`;

const Golfer = styled.div`
    border-radius: 50%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 300;
    border: 3vh solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 3vh rgba(255, 255, 255, 0.1);

    ${props =>
        props.small &&
        css`
            font-size: 0.7rem;
            background: rgba(0, 0, 0, 0.2);
            border: none;
            box-shadow: none;
        `};
`;

const Golfers = () => (
    <GolfersContainer>
        <GolfersWrapper>
            <Radial itemSize="small" distance="10vh">
                <RadialCenter>
                    <Golfer>RJB</Golfer>
                </RadialCenter>
                <RadialItem angle={155}>
                    <Golfer small>PAT</Golfer>
                </RadialItem>
                <RadialItem angle={180}>
                    <Golfer small>BC</Golfer>
                </RadialItem>
                <RadialItem angle={-155}>
                    <Golfer small>ROS</Golfer>
                </RadialItem>
            </Radial>
        </GolfersWrapper>
    </GolfersContainer>
);

export default Golfers;
