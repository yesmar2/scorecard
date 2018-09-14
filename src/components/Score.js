import React, { Component } from "react";
import styled from "styled-components";

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
    //box-shadow: 0px 0px 0px 1.5vh rgba(0, 0, 0, 0.1);
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

class Ball extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.scoreAnimation();
        this.props.enterScore(1, this.props.value);
    }

    render() {
        const { scoreTerm, value, className, style } = this.props;

        return (
            <BallWrapper className={className} style={style} onClick={this.onClick}>
                <Score>{value}</Score>
                <ScoreTerm>{scoreTerm}</ScoreTerm>
            </BallWrapper>
        );
    }
}

export default Ball;
