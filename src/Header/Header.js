import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <svg x="0px" y="0px" viewBox="0 0 500 250" enableBackground="new 0 0 500 250" preserveAspectRatio="none">
                    <path
                        fill="#FFFFFF"
                        d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                    />
                </svg>
                <i className="material-icons">keyboard_arrow_left</i>
                <h2>Hole 1</h2>
                <i className="material-icons">keyboard_arrow_right</i>
            </div>
        );
    }
}
export default Header;
