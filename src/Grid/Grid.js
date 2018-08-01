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
                    <Circle value="1" gridLocation="top-left" />
                    <Circle value="2" gridLocation="top-right" />
                    <Circle value="3" gridLocation="top-middle" />
                    <Circle value="4" gridLocation="middle-left" />
                    <Circle value="5" gridLocation="middle" />
                    <Circle value="6" gridLocation="middle-right" />
                    <Circle value="7" gridLocation="bottom-left" />
                    <Circle value="8" gridLocation="bottom-middle" />
                    <Circle value="9" gridLocation="bottom-right" />
                </div>
            </div>
        );
    }
}
export default Grid;
