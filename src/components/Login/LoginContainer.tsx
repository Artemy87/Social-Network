import React, {Component} from "react";
import Login from "./Login";

export default class LoginContainer extends Component<HeaderPropsType> {
    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {}
// };


// убрать export, 6 строка!!!!!!!!
// export default connect(
//     mapStateToProps,
//     {}
// )(LoginContainer);


//type
type MapStatePropsType = {};
type MapDispatchPropsType = {};
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType;

