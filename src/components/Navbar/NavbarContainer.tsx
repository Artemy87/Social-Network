import React from 'react';
import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {AppStateType} from "../../Redux/redux-store";
import {FriendType} from "../../Redux/sidebar-reducer";

export type MapStateToPropsType = {
    friends: FriendType[]
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)


// export class NavbarContainer extends Component {
//     render() {
//         return (
//             <Navbar friends={this.props.friends}/>
//         )
//     }
// }
//
// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         friends: state.sidebar.friends
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     {}
// )(Navbar);