import React, { Component } from "react";
import "./Circle.css";

class Circle extends Component {
    render() {
        return <div className={`circle ${this.props.gridLocation}`}>{this.props.value}</div>;
    }
}

export default Circle;
