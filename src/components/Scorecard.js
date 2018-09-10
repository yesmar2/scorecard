import React from "react";
import styled, { css } from "styled-components";

const ScorecardWrapper = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    left: 0px;
    height: 200px;
    background: #fff;
    transform: translateY(-200px);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms    
    z-index: 1;

    ${props =>
        props.visibility === "opened" &&
        css`
            transform: translateX(0);
        `};
`;

const CloseButton = styled.section`
    font-size: 1.2rem;
    position: absolute;
    top: 20px;
    right: 20px;
    font-family: inherit;
    border: 0;
    padding: 0;
    outline: 0;
    color: rgba(0, 0, 0, 0.8);
    background: none;
    cursor: pointer;
`;

/*
Some table styling to start with:

.scorecard table {
    width: 100%;
    border-collapse: collapse;
}

.scorecard thead {
    background-color: rgba(0, 0, 0, 0.2);
}

.scorecard td:first-child {
    border-left: none;
}

.scorecard td:last-child {
    border-right: none;
}

.scorecard td {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.5rem;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
}
*/

const Scorecard = props => {
    const { scorecardVisibility, setScorecardVisibility } = props;

    return (
        <ScorecardWrapper visibility={scorecardVisibility}>
            <CloseButton onClick={() => setScorecardVisibility("closed")}>
                <i className="material-icons">close</i>
            </CloseButton>
        </ScorecardWrapper>
    );
};

export default Scorecard;
