import React, { Component } from "react";
import { connect } from "react-redux";
import Animated from "animated/lib/targets/react-dom";
import enterScore from "../actions/enterScore";
import "./Ball.css";

class Ball extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateX: new Animated.Value(0),
            animateY: new Animated.Value(0),
            scale: new Animated.Value(1),
            rect: null
        };

        this.selected = this.selected.bind(this);
        this.refCallback = this.refCallback.bind(this);
    }

    selected() {
        this.props.enterScore(1, 5);

        const xTranslate = -this.state.rect.left;
        const yTranslate = -this.state.rect.top;

        Animated.sequence([
            Animated.parallel([
                Animated.timing(this.state.animateX, {
                    toValue: xTranslate
                }),
                Animated.timing(this.state.animateY, {
                    toValue: yTranslate
                })
            ]),
            Animated.timing(this.state.scale, {
                toValue: 0
            })
        ]).start();
    }

    refCallback(element) {
        if (element) {
            this.setState({
                rect: element.getBoundingClientRect()
            });
        }
    }

    render() {
        const { scoreTerm, score, scoreColor } = this.props;

        return (
            <div ref={this.refCallback} style={{ height: "100%" }}>
                <Animated.div
                    className="ball"
                    style={{
                        transform: [{ translateX: this.state.animateX }, { translateY: this.state.animateY }, { scale: this.state.scale }]
                        // zIndex: zIndex
                    }}
                    onClick={this.selected}
                >
                    <div>{scoreTerm}</div>
                    <div className={`score ${scoreColor}`}>{score}</div>
                </Animated.div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    scorePosition: state.scorePosition
});

const mapDispatchToProps = dispatch => ({
    enterScore: (hole, score) => dispatch(enterScore(hole, score))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ball);
