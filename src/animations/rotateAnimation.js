import React, { Component } from "react";
import Animated from "animated/lib/targets/react-dom";

const createRotateAnimation = Target => {
    const AnimatedTarget = Animated.createAnimatedComponent(Target);

    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                rotate: new Animated.Value(props.fromAngle)
            };

            this.rotateAnimation = this.rotateAnimation.bind(this);
        }

        rotateAnimation() {
            Animated.timing(this.state.rotate, {
                toValue: this.props.toAngle,
                duration: 600
            }).start();
        }

        render() {
            const { rotate } = this.state;
            const { toAngle, ...other } = this.props;

            return (
                <AnimatedTarget
                    style={{
                        transform: [
                            {
                                rotate: rotate.interpolate({
                                    inputRange: [-360, 360],
                                    outputRange: ["-360deg", "360deg"]
                                })
                            }
                        ]
                    }}
                    rotateAnimation={this.rotateAnimation}
                    angle={toAngle}
                    {...other}
                />
            );
        }
    };
};

export default createRotateAnimation;
