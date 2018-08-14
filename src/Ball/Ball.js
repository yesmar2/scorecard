import React, { Component } from "react";
import { connect } from "react-redux";
import Animated from "animated/lib/targets/react-dom";
import "./Ball.css";

class Ball extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateX: new Animated.Value(0),
            animateY: new Animated.Value(0),
            rect: null
        };

        this.selected = this.selected.bind(this);
        this.refCallback = this.refCallback.bind(this);
    }

    selected() {
        const xTranslate = -this.state.rect.left;
        const yTranslate = -this.state.rect.top;

        Animated.parallel([
            Animated.spring(this.state.animateX, {
                toValue: xTranslate,
                tension: 0.1
            }),
            Animated.spring(this.state.animateY, {
                toValue: yTranslate,
                tension: 0.1
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
                        transform: [{ translateX: this.state.animateX }, { translateY: this.state.animateY }]
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

Ball = connect(mapStateToProps)(Ball);

export default Ball;
