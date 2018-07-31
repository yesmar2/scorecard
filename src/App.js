import React, { Component } from "react";
import Grid from "./Grid";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="main">
                    <Grid />
                </div>
            </div>
        );
    }
}

export default App;
