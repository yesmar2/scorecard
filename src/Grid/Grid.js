import React, { Component } from "react";
import Circle from "../Circle";
import "./Grid.css";

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-wrapper">
                <div className="grid">
                    <Circle value="3" gridLocation="top-left" />
                    <Circle value="4" gridLocation="top-middle" />
                    <Circle value="5" gridLocation="middle" />
                    <Circle value="6" gridLocation="bottom-middle" />
                    <Circle value="7" gridLocation="bottom-right" />
                </div>
            </div>
        );
    }
}
export default Grid;
