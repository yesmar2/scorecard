import React, { Component } from "react";
import { connect } from "react-redux";
import Animated from "animated/lib/targets/react-dom";
import "./Circle.css";

class Circle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateX: new Animated.Value(0),
            animateY: new Animated.Value(0),
            animateScale: new Animated.Value(0),
            rect: null
        };

        this.selected = this.selected.bind(this);
        this.refCallback = this.refCallback.bind(this);
    }

    selected() {
        const xTranslate = this.props.scorePosition[0].scorePosition.left - this.state.rect.left;
        const yTranslate = this.props.scorePosition[0].scorePosition.top - this.state.rect.top;

        Animated.parallel([
            Animated.spring(this.state.animateX, {
                toValue: xTranslate,
                tension: 0.1
            }),
            Animated.spring(this.state.animateY, {
                toValue: yTranslate,
                tension: 0.1
            }),
            Animated.spring(this.state.animateScale, {
                toValue: 1,
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
        return (
            <div className={this.props.gridLocation} ref={this.refCallback}>
                <Animated.div
                    className="circle"
                    style={{
                        transform: [
                            { translateX: this.state.animateX },
                            { translateY: this.state.animateY },
                            {
                                scale: this.state.animateScale.interpolate({
                                    inputRange: [0, 0.75, 0.9, 0.95, 1],
                                    outputRange: [1, 4, 0.5, 0.75, 0.25]
                                })
                            }
                        ]
                        // borderRadius: animateBorderRadius.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [circleHeight / 2, 15]
                        // }),
                        // height: animateHeight.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [circleHeight, 30]
                        // }),
                        // // background: this.state.animateBackground1.interpolate({
                        // //     inputRange: [0, 1],
                        // //     outputRange: [
                        // //         "linear-gradient(#fff,#000)",
                        // //         "linear-gradient(#000,#fff)"
                        // //     ]
                        // // }),
                        // zIndex: zIndex
                    }}
                    onClick={this.selected}
                >
                    {this.props.value}
                </Animated.div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    scorePosition: state.scorePosition
});

Circle = connect(mapStateToProps)(Circle);

export default Circle;
