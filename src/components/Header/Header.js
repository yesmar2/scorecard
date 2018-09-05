import React, { Component } from "react";
import { connect } from "react-redux";
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
                    <div className="over-under">+2</div>
                    <img className="golfer" src={RamseyAvatar} />
                    <h1>Ramsey</h1>
                    <button className="menu-button" onClick={() => this.props.setScorecardVisibility("open")}>
                        <i className="material-icons">menu</i>
                    </button>
                    <button className="scorecard-button" onClick={() => this.props.setScorecardVisibility("open")}>
                        <i className="material-icons ">view_list</i>
                    </button>
                    {/* <img className="over-under" src="http://i.pravatar.cc/30" />
                    <img className="over-under" src="http://i.pravatar.cc/30" />
                    <img className="over-under" src="http://i.pravatar.cc/30" /> */}
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
