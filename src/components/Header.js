import React from "react";
import { connect } from "react-redux";
import Golfers from "./Golfers";
import setScorecardVisibility from "../actions/setScorecardVisibility";
import styled from "styled-components";

const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    height: 45vh;
    width: 120%;
    border-radius: 0 0 50% 50%;
`;

const HeaderWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MenuButton = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`;

const ScorecardButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const Header = props => {
    const { setScorecardVisibility } = props;

    return (
        <HeaderStyled>
            <HeaderWrapper>
                <MenuButton>
                    <i className="material-icons">menu</i>
                </MenuButton>
                <ScorecardButton onClick={() => setScorecardVisibility("opened")}>
                    <i className="material-icons ">view_list</i>
                </ScorecardButton>
                <Golfers />
            </HeaderWrapper>
        </HeaderStyled>
    );
};

const mapDispatchToProps = dispatch => ({
    setScorecardVisibility: visibility => dispatch(setScorecardVisibility(visibility))
});

export default connect(
    null,
    mapDispatchToProps
)(Header);
