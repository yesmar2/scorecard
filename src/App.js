import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ScorecardVisibility from "./containers/ScorecardVisibility";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ScorecardVisibility />
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
