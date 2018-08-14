import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                {/* <i className="material-icons">keyboard_arrow_left</i> */}
                <h2>Bemus Point Golf Course</h2>
                <section className="hole-info">
                    <div className="hole-stat">
                        <div className="hole-stat-value">4</div>
                        <div className="hole-stat-description">Par</div>
                    </div>
                    <div>
                        <h3>Hole 1</h3>
                        <p>365 yards</p>
                    </div>
                    <div className="hole-stat">
                        <div className="hole-stat-value">3</div>
                        <div className="hole-stat-description">S. Index</div>
                    </div>
                </section>
                {/* <svg x="0px" y="0px" viewBox="0 0 500 250" enableBackground="new 0 0 500 250" preserveAspectRatio="none">
                    <path
                        fill="#f4f7f8"
                        d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                    />
                </svg> */}
                {/* <i className="material-icons">keyboard_arrow_right</i> */}
            </header>
        );
    }
}
export default Header;
