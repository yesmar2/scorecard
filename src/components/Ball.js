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
    background: #f4f7f8;
    color: rgba(0, 0, 0, 0.6);
    background-size: 25px 15px;
    font-weight: normal;
    box-shadow: 0px 0px 0px 1.5vh rgba(0, 0, 0, 0.1);
    // box-shadow: 0 0 42px rgba(0, 0, 0, 0.08), 0 1px 0 rgba(0, 0, 0, 0.12), 0 0 4px rgba(0, 0, 0, 0.06);
`;

const Score = styled.div`
    line-height: 1;
`;

const ScoreTerm = styled.div`
    line-height: 1;
    font-size: 0.4em;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.4);
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
        const { scoreTerm, score, scoreColor, className } = this.props;
        const { scoreEntered, zIndex } = this.state;

        return (
            <AnimatedBall
                className={className}
                style={{
                    transform: [{ translateX: this.state.animateX }, { translateY: this.state.animateY }, { scale: this.state.scale }],
                    zIndex: zIndex
                }}
                onClick={this.selected}
            >
                {!scoreEntered && [<Score key={0}>{score}</Score>, <ScoreTerm key={1}>{scoreTerm}</ScoreTerm>]}
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
