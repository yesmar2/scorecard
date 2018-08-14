import React, { Component } from "react";
import { connect } from "react-redux";
import "./Hole.css";

class Hole extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="hole" />;
    }
}

Hole = connect()(Hole);

export default Hole;
