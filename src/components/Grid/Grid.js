import React, { Component } from "react";
import Ball from "../Ball";
import "./Grid.css";

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-wrapper">
                <div className="grid">
                    <div className="middle">
                        <Ball scoreTerm="Par" score="4" scoreColor="green" />
                    </div>
                    <div className="top-left">
                        <Ball scoreTerm="Birdie" score="3" scoreColor="green" />
                    </div>
                    <div className="top-middle">
                        <Ball scoreTerm="Eagle" score="2" scoreColor="green" gridLocation="top-middle" />
                    </div>
                    <div className="top-right">
                        <Ball scoreTerm="Bogie" score="5" scoreColor="red" gridLocation="top-right" />
                    </div>
                    <div className="middle-left">
                        <Ball scoreTerm="Q. Bogie" score="8" scoreColor="red" gridLocation="middle-left" />
                    </div>
                    <div className="middle-right">
                        <Ball scoreTerm="Nine" score="9" scoreColor="red" gridLocation="middle-right" />
                    </div>
                    <div className="bottom-left">
                        <Ball scoreTerm="D. Bogie" score="6" scoreColor="red" gridLocation="bottom-left" />
                    </div>
                    <div className="bottom-middle">
                        <Ball scoreTerm="Hole in 1" score="1" scoreColor="green" gridLocation="bottom-middle" />
                    </div>
                    <div className="bottom-right">
                        <Ball scoreTerm="T. Bogie" score="7" scoreColor="red" gridLocation="bottom-right" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Grid;
