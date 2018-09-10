import React, { Component } from "react";
import { connect } from "react-redux";
import Animated from "animated/lib/targets/react-dom";
import enterScore from "../actions/enterScore";
import styled, { css } from "styled-components";

const BallWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.6);
    /* background: #eee url("../../images/golfball.svg"); */
    background: #ececec;
    background-size: 25px 15px;
    font-weight: normal;
    /* box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); */
    box-shadow: 0px 0px 0px 0.5rem rgba(0, 0, 0, 0.1);
`;

const Score = styled.div`
    margin-top: 0.3em;
    font-size: 0.8em;

    ${props =>
        props.scoreColor === "red" &&
        css`
            color: rgb(203, 37, 37);
        `} ${props =>
        props.scoreColor === "green" &&
        css`
            color: rgb(37, 203, 119);
        `};
`;

const AnimatedBall = Animated.createAnimatedComponent(BallWrapper);

class Ball extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateX: new Animated.Value(0),
            animateY: new Animated.Value(0),
            scale: new Animated.Value(1),
            scoreEntered: false,
            zIndex: 0
        };

        this.selected = this.selected.bind(this);
    }

    selected() {
        this.props.enterScore(1, 5);
        this.setState({ scoreEntered: true, zIndex: 1 });

        Animated.stagger(201, [
            Animated.parallel([
                Animated.timing(this.state.animateX, {
                    toValue: -100,
                    duration: 200
                }),
                Animated.timing(this.state.animateY, {
                    toValue: -150,
                    duration: 300
                }),
                Animated.timing(this.state.scale, {
                    toValue: 0.4,
                    duration: 200
                })
            ]),
            Animated.timing(this.state.scale, {
                toValue: 20,
                duration: 400
            })
        ]).start();
    }

    render() {
        const { scoreTerm, score, scoreColor } = this.props;
        const { scoreEntered, zIndex } = this.state;

        return (
            <AnimatedBall
                style={{
                    transform: [{ translateX: this.state.animateX }, { translateY: this.state.animateY }, { scale: this.state.scale }],
                    zIndex: zIndex
                }}
                onClick={this.selected}
            >
                {!scoreEntered && [
                    <div key={0}>{scoreTerm}</div>,
                    <Score scoreColor={scoreColor} key={1}>
                        {score}
                    </Score>
                ]}
            </AnimatedBall>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    enterScore: (hole, score) => dispatch(enterScore(hole, score))
});

export default connect(
    null,
    mapDispatchToProps
)(Ball);
