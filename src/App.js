import React, { Component } from "react";
import Header from "./Header";
import Scorecard from "./Scorecard";
import Hole from "./Hole";
import Grid from "./Grid";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Hole />
                {/* <Scorecard /> */}
                <Header />
                <div className="main">
                    <Grid />
                </div>
            </div>
        );
    }
}

export default App;
