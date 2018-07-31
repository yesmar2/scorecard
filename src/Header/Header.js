import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <i class="material-icons">keyboard_arrow_left</i>
                <h2>Hole 1</h2>
                <i class="material-icons">keyboard_arrow_right</i>
            </div>
        );
    }
}
export default Header;
