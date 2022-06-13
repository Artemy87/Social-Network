import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";

import {AppActionsType, AppStateType} from "../../Redux/redux-store";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";
import {usersAPI} from "../../api/api";
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

    componentDidMount() {
        usersAPI.auth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {login, id, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            // <Header {...this.props}/>
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
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