import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends Component<HeaderPropsType> {

    componentDidMount() {
        // thunkCreator, который возвращает и вызывает санку(thunk)
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
};
type MapDispatchPropsType = {
    getAuthUserData: () => void
}
type HeaderPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});


export default connect(
    mapStateToProps,
    {
        getAuthUserData
    }
)(HeaderContainer);
