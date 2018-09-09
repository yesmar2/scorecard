import React from "react";
import styled from "styled-components";

const RadiaCenterRoot = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RadialCenter = props => <RadiaCenterRoot>{props.children}</RadiaCenterRoot>;

export default RadialCenter;
