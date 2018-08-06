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
                    <Circle title="Birdie" description="3" gridLocation="top-left" />
                    <Circle title="Eagle" description="2" gridLocation="top-middle" />
                    <Circle title="Bogie" description="5" gridLocation="top-right" />
                    <Circle title="Snowman" description="8" gridLocation="middle-left" />
                    <Circle title="Max" description="9" gridLocation="middle-right" />
                    {/* <Circle title="Double Bogie" description="6" gridLocation="bottom-left" /> */}
                    <Circle title="Hole in 1" description="1" gridLocation="bottom-middle" />
                    {/* <Circle title="Triple Bogie" description="7" gridLocation="bottom-right" /> */}
                    <Circle title="Par" description="4" gridLocation="middle" />
                </div>
            </div>
        );
    }
}
export default Grid;
