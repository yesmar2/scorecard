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
                    <Circle title="Par" description="4" scoreColor="green" gridLocation="middle" />
                    <Circle title="Birdie" description="3" scoreColor="green" gridLocation="top-left" />
                    <Circle title="Eagle" description="2" scoreColor="green" gridLocation="top-middle" />
                    <Circle title="Bogie" description="5" scoreColor="red" gridLocation="top-right" />
                    <Circle title="Q. Bogie" description="8" scoreColor="red" gridLocation="middle-left" />
                    <Circle title="Nine" description="9" scoreColor="red" gridLocation="middle-right" />
                    <Circle title="D. Bogie" description="6" scoreColor="red" gridLocation="bottom-left" />
                    <Circle title="Hole in 1" description="1" scoreColor="green" gridLocation="bottom-middle" />
                    <Circle title="T. Bogie" description="7" scoreColor="red" gridLocation="bottom-right" />
                </div>
            </div>
        );
    }
}
export default Grid;
