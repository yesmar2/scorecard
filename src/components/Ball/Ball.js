import React, { Component } from "react";
import { connect } from "react-redux";
import Animated from "animated/lib/targets/react-dom";
import enterScore from "../../actions/enterScore";
import "./Ball.css";

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
        const { scoreTerm, score, scoreColor, size } = this.props;
        const { scoreEntered, zIndex } = this.state;

        return (
            <Animated.div
                className={`ball ${size}`}
                style={{
                    transform: [{ translateX: this.state.animateX }, { translateY: this.state.animateY }, { scale: this.state.scale }],
                    zIndex: zIndex
                }}
                onClick={this.selected}
            >
                {!scoreEntered && [
                    <div key={0}>{scoreTerm}</div>,
                    <div className={`score ${scoreColor}`} key={1}>
                        {score}
                    </div>
                ]}
            </Animated.div>
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