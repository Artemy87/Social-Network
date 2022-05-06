import {Dispatch} from "redux";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppActionsType, AppStateType} from "../Redux/redux-store";
import {setUsersAC, unfollowAC, UsersType} from "../Redux/users-reducer";

type MapStateToPropsType = {
    users: UsersType[]
}
type MapDispatchToPropsType = {
    follow: (userId: string, followed: boolean) => void
    unfollow: (userId: string, followed: boolean) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: string, followed: boolean) => {
            dispatch(unfollowAC(userId, followed))
        },
        unfollow: (userId: string, followed: boolean) => {
            dispatch(unfollowAC(userId, followed))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(
    mapStateToProps, mapDispatchToProps)(Users);