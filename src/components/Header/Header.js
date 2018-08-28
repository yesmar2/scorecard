import React, { Component } from "react";
import { connect } from "react-redux";
import setScorecardVisibility from "../../actions/setScorecardVisibility";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-container">
                <header className="header">
                    <i className="material-icons menu-icon">menu</i>
                    <button className="over-under" onClick={() => this.props.setScorecardVisibility("open")}>
                        +2
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
