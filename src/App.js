import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ScorecardVisibility from "./containers/ScorecardVisibility";
import styled from "styled-components";
import backgroundImage from "./images/golfer-1960998_1920.jpg";

const AppWrapper = styled.div`
    height: 100%;
    background: linear-gradient(rgb(38, 222, 129, 0.9), rgb(38, 222, 129, 0.9)), url(${backgroundImage}) no-repeat center 20% / cover;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <ScorecardVisibility />
                <Header />
                <Main />
            </AppWrapper>
        );
    }
}

export default App;
