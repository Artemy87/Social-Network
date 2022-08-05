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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({

});

export default connect(
    mapStateToProps,
    {}
)(LoginContainer);


//type
type MapStatePropsType = {

};
type MapDispatchPropsType = {

}
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType

