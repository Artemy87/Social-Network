import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    UsersType
} from "../Redux/users-reducer";
import {Users} from "./Users";

type UsersComponentType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}
type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
// type MapDispatchToPropsType = {
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users: UsersType[]) => void
//     setTotalUsersCount: (count: number) => void
//     setCurrentPage: (page: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

export class UsersContainer extends Component<UsersComponentType, {}> {

    baseURL = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`;

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`${this.baseURL}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true)
        axios.get(`${this.baseURL}&page=${p}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let {users, follow, unfollow, pageSize, totalUsersCount, isFetching} = this.props;

        return (
            <Users
                users={users}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={follow}
                unfollow={unfollow}
                isFetching={isFetching}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}*/

export default connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }
)(UsersContainer);