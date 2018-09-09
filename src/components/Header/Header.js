import React, { Component } from "react";
import { connect } from "react-redux";
import Radial from "../Radial";
import RadialCenter from "../Radial/RadialCenter";
import RadialItem from "../Radial/RadialItem";
import setScorecardVisibility from "../../actions/setScorecardVisibility";
import RamseyAvatar from "../../images/Ramsey.jpg";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-container">
                <header className="header">
                    <div className="golfers">
                        <Radial itemSize="small" distance="20vw">
                            <RadialCenter>
                                <div className="golfer">RJB</div>
                            </RadialCenter>
                            <RadialItem angle={155}>
                                <div className="golfer small">RJB</div>
                            </RadialItem>
                            <RadialItem angle={180}>
                                <div className="golfer small">RJB</div>
                            </RadialItem>
                            <RadialItem angle={-155}>
                                <div className="golfer small">RJB</div>
                            </RadialItem>
                        </Radial>
                    </div>

                    <button className="menu-button" onClick={() => this.props.setScorecardVisibility("open")}>
                        <i className="material-icons">menu</i>
                    </button>
                    <button className="scorecard-button" onClick={() => this.props.setScorecardVisibility("open")}>
                        <i className="material-icons ">view_list</i>
                    </button>
                </header>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setScorecardVisibility: visibility => dispatch(setScorecardVisibility(visibility))
});

export default connect(
    null,
    mapDispatchToProps
)(Header);
