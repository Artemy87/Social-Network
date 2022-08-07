import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getAuthUserData, logOut} from "../../Redux/auth-reducer";

class HeaderContainer extends Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData(); // thunkCreator, который возвращает и вызывает санку(thunk)
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);


//types
type MapStatePropsType = {
    login: string | null
    isAuth: boolean
};
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logOut: () => void
}
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType
