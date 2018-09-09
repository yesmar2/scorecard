import React from "react";
import styled from "styled-components";

const RadialItemRoot = styled.div`
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

const RadialItem = props => {
    const { angle, itemSize, distance } = props;

    let size;
    switch (itemSize) {
        case "small":
            size = "25%";
            break;
        case "medium":
            size = "50%";
            break;
        case "large":
            size = "100%";
            break;
    }

    return (
        <RadialItemRoot angle={angle}>
            <RadialItemPositioned angle={angle} size={size} distance={distance}>
                {props.children}
            </RadialItemPositioned>
        </RadialItemRoot>
    );
};

export default RadialItem;
