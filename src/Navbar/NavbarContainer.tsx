import React from 'react';
import {connect} from "react-redux";
import {AllStateType} from "../Redux/redux-store";
import {Navbar} from "./Navbar";

let mapStateToProps = (state:AllStateType) => {
    return {
        friends: state.sidebar.friends
    }
}


export const NavbarContainer
    = connect(mapStateToProps, {})(Navbar)
