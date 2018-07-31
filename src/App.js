import React, { Component } from "react";
import Grid from "./Grid";
import Header from "./Header";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="main">
                    <Grid />
                </div>
            </div>
        );
    }
}

export default App;
