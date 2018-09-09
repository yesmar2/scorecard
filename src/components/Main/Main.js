import React, { Component } from "react";
import HoleInfo from "../HoleInfo";
import Ball from "../Ball";
import Radial from "../Radial";
import RadialCenter from "../Radial/RadialCenter";
import RadialItem from "../Radial/RadialItem";
import "./Main.css";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <HoleInfo />
                <div className="scoring">
                    <Radial itemSize="medium" distance="25vw">
                        <RadialCenter>
                            <Ball scoreTerm="Par" score="4" scoreColor="green" />
                        </RadialCenter>
                        <RadialItem angle={-90}>
                            <Ball scoreTerm="Eagle" score="2" scoreColor="green" />
                        </RadialItem>
                        <RadialItem angle={-45}>
                            <Ball scoreTerm="Birdie" score="3" scoreColor="green" />
                        </RadialItem>
                        <RadialItem angle={0}>
                            <Ball scoreTerm="Bogie" score="5" scoreColor="red" />
                        </RadialItem>
                        <RadialItem angle={45}>
                            <Ball scoreTerm="D. Bogie" score="6" scoreColor="red" />
                        </RadialItem>
                        <RadialItem angle={90}>
                            <Ball scoreTerm="T. Bogie" score="7" scoreColor="red" />
                        </RadialItem>
                    </Radial>
                </div>
            </div>
        );
    }
}
export default Main;
