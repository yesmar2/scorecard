import React from "react";
import "./HoleInfo.css";

const HoleInfo = props => (
    <section className="hole-info">
        <i className="material-icons">keyboard_arrow_left</i>
        <div className="hole-stat">
            <div className="hole-stat-value">4</div>
            <div className="hole-stat-description">Par</div>
        </div>
        <div className="hole">
            <h3>Hole 1</h3>
            <p>365 yards</p>
        </div>
        <div className="hole-stat">
            <div className="hole-stat-value">3</div>
            <div className="hole-stat-description">Hcp</div>
        </div>
        <i className="material-icons">keyboard_arrow_right</i>
    </section>
);

export default HoleInfo;
