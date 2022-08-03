import React, {Component} from "react";
import {Login} from "./Login";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

class LoginContainer extends Component<HeaderPropsType> {

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

type MapStatePropsType = {

};
type MapDispatchPropsType = {

}
type HeaderPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({

});


export default connect(
    mapStateToProps,
    {}
)(LoginContainer);
