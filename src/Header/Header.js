import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="header-container">
                <header className="header">
                    <i className="material-icons menu-icon">menu</i>
                    <h2>Bemus Point Golf Course</h2>
                    <section className="hole-info">
                        <i className="material-icons">keyboard_arrow_left</i>
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
                        <i className="material-icons">keyboard_arrow_right</i>
                    </section>
                    <i className="material-icons scorecard-icon">view_list</i>
                </header>
            </div>
        );
    }
}
export default Header;
