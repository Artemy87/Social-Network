import {Dispatch} from "redux";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppActionsType, AppStateType} from "../Redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../Redux/users-reducer";

type MapStateToPropsType = {
    users: UsersType[]
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(
    mapStateToProps, mapDispatchToProps)(Users);