import React, { Component } from "react";
import Animated from "animated/lib/targets/react-dom";

const createScoreAnimation = Target => {
    const AnimatedTarget = Animated.createAnimatedComponent(Target);

    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                animateX: new Animated.Value(0),
                animateY: new Animated.Value(0),
                scale: new Animated.Value(1),
                scoreEntered: false,
                zIndex: 0
            };

            this.scoreAnimation = this.scoreAnimation.bind(this);
        }

        scoreAnimation() {
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
            const { zIndex, animateX, animateY, scale } = this.state;
            return (
                <AnimatedTarget
                    style={{
                        transform: [{ translateX: animateX }, { translateY: animateY }, { scale: scale }],
                        zIndex: zIndex
                    }}
                    scoreAnimation={this.scoreAnimation}
                    {...this.props}
                />
            );
        }
    };
};

export default createScoreAnimation;
