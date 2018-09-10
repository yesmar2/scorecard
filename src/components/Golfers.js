import React from "react";
import Radial from "./Radial";
import RadialCenter from "./RadialCenter";
import RadialItem from "./RadialItem";
import styled, { css } from "styled-components";

const GolfersWrapper = styled.div`
    height: 120px;
    width: 120px;
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
    border: 20px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1);

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
    <GolfersWrapper>
        <Radial itemSize="small" distance="65px">
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
);

export default Golfers;
