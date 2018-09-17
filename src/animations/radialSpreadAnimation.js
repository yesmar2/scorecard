import React, { Component } from "react";
import Animated from "animated/lib/targets/react-dom";
import RadialItem from "../components/RadialItem";

const AnimatedRadialItem = Animated.createAnimatedComponent(RadialItem);

const createRadialSpreadAnimation = Target => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                radialItems: [],
                animatedRadialItems: []
            };
        }

        componentDidMount() {
            const childrenArray = React.Children.toArray(this.props.children);
            const radialItems = childrenArray.filter(child => child.type.name === "RadialItem");

            this.setState(
                {
                    radialItems,
                    animatedRadialItems: radialItems.map(() => new Animated.Value(0))
                },
                () => {
                    Animated.stagger(
                        100,
                        this.state.animatedRadialItems.map(anim => Animated.spring(anim, { toValue: 1, speed: 14 }))
                    ).start();
                }
            );
        }

        render() {
            return (
                <Target {...this.props}>
                    {this.state.radialItems.map((child, index) => {
                        return (
                            <AnimatedRadialItem
                                key={index}
                                style={{
                                    opacity: this.state.animatedRadialItems[index],
                                    transform: [
                                        {
                                            translateY: this.state.animatedRadialItems[index].interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ["100px", "0px"]
                                            })
                                        }
                                    ]
                                }}
                                {...child.props}
                            />
                        );
                    })}
                </Target>
            );
        }
    };
};

export default createRadialSpreadAnimation;
