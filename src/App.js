import React, { Component } from "react";
import Header from "./Header";
import Grid from "./Grid";
import ScorecardVisibility from "./containers/ScorecardVisibility";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ScorecardVisibility />
                <Header />
                <div className="main">
                    <Grid />
                </div>
            </div>
        );
    }
}

export default App;
