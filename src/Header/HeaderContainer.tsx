import React, {Component} from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";

import {AppActionsType, AppStateType} from "../Redux/redux-store";
import {setAuthUserDataAC} from "../Redux/auth-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
};
type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
type HeaderPropsType = MapDispatchPropsType & MapStateToPropsType

class HeaderContainer extends Component<HeaderPropsType> {

    baseURL = `https://social-network.samuraijs.com/api/1.0/`;

    componentDidMount() {
        axios.get(
            `${this.baseURL}auth/me`,
            {withCredentials: true}
        )
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {login, id, email} = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});
const mapDispatchToProps = (dispatch: Dispatch<AppActionsType>):MapDispatchPropsType => {
    return {
        setAuthUserData: (id: number, email: string, login: string) => {
            dispatch(setAuthUserDataAC(id, email, login))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);