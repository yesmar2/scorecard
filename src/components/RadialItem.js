import React, { Component } from "react";
import styled from "styled-components";

const RadialItemWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    transform: rotate(${props => (props.angle ? `${props.angle}deg` : "0deg")});
`;

const RadialItemPositioned = styled.div`
    position: absolute;
    top: ${props => (props.distance ? `-${props.distance}` : "-100%")};
    left: 50%;
    height: ${props => props.size};
    width: ${props => props.size};
    margin-left: calc(-${props => props.size} / 2);
    font-size: 0.8rem;
    transform: rotate(${props => (props.angle ? `${props.angle * -1}deg` : "0deg")});
`;

class RadialItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.rotateAnimation) {
            this.props.rotateAnimation();
        }
    }

    render() {
        const { angle, itemSize, distance, children, style } = this.props;

        let size;
        switch (itemSize) {
            case "small":
                size = "25%";
                break;
            case "medium":
                size = "50%";
                break;
            default:
                size = "100%";
                break;
        }

        return (
            <RadialItemWrapper angle={angle} style={style}>
                <RadialItemPositioned angle={angle} size={size} distance={distance}>
                    {children}
                </RadialItemPositioned>
            </RadialItemWrapper>
        );
    }
}

export default RadialItem;
