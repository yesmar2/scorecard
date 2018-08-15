import React, { Component } from "react";
import { connect } from "react-redux";
import Animated from "animated/lib/targets/react-dom";
import "./Hole.css";

class Hole extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: new Animated.Value(0)
        };
    }

    componentDidUpdate() {
        Animated.sequence([
            Animated.timing(this.state.scale, {
                toValue: 1
            }),
            Animated.timing(this.state.scale, {
                toValue: 0,
                delay: 500
            })
        ]).start();
    }

    render() {
        return (
            <Animated.div
                className="hole"
                style={{
                    transform: [{ scale: this.state.scale }]
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    golfRound: state.golfRound
});

export default connect(mapStateToProps)(Hole);
