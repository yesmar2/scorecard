import React, { Component } from "react";
import styled from "styled-components";

const RadialRoot = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const RadialHub = styled.div`
    position: absolute;
    width: 100%;
    padding-top: 100%;
`;

class Radial extends Component {
    constructor(props) {
        super(props);

        this.renderChildrenWithParentProps = this.renderChildrenWithParentProps.bind(this);
    }

    renderChildrenWithParentProps() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                itemSize: this.props.itemSize,
                distance: this.props.distance
            });
        });
    }

    render() {
        const { centerSize } = this.props;
        return (
            <RadialRoot>
                <RadialHub>{this.renderChildrenWithParentProps()}</RadialHub>
            </RadialRoot>
        );
    }
}

export default Radial;
