import React from "react";
import ScoreContainer from "../containers/ScoreContainer";
import Radial from "./Radial";
import RadialCenter from "./RadialCenter";
import RadialItem from "./RadialItem";
import createRotateAnimation from "../animations/rotateAnimation";
import createScoreAnimation from "../animations/scoreAnimation";
import styled from "styled-components";

const AnimatedRadialItem = createRotateAnimation(RadialItem);
const AnimatedScore = createScoreAnimation(ScoreContainer);

const ScoringRoot = styled.div`
    height: 60vw;
    display: flex;
    align-items: flex-end;
`;

const ScoringWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    height: 35vw;
    width: 35vw;
`;

const CenterScore = styled(AnimatedScore)`
    font-size: 6vh;
    font-weight: 300;
`;

const OuterScore = styled(AnimatedScore)`
    font-size: 3vh;
`;

const Scoring = () => (
    <ScoringRoot>
        <ScoringWrapper>
            <Radial itemSize="medium" distance="25vw">
                <RadialCenter>
                    <CenterScore scoreTerm="Par" value={4} />
                </RadialCenter>
                <AnimatedRadialItem angle={-90}>
                    <OuterScore scoreTerm="Eagle" value={2} />
                </AnimatedRadialItem>
                <AnimatedRadialItem fromAngle={-90} toAngle={-45}>
                    <OuterScore scoreTerm="Birdie" value={3} />
                </AnimatedRadialItem>
                <AnimatedRadialItem fromAngle={-90} toAngle={0}>
                    <OuterScore scoreTerm="Bogie" value={5} />
                </AnimatedRadialItem>
                <AnimatedRadialItem fromAngle={-90} toAngle={45}>
                    <OuterScore scoreTerm="D. Bogie" value={6} />
                </AnimatedRadialItem>
                <AnimatedRadialItem fromAngle={-90} toAngle={90}>
                    <OuterScore scoreTerm="T. Bogie" value={7} />
                </AnimatedRadialItem>
            </Radial>
        </ScoringWrapper>
    </ScoringRoot>
);

export default Scoring;
