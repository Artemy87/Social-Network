import React, {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, UsersType, toggleFollowingProgress,
} from "../../Redux/users-reducer";
import {usersAPI} from "../../api/api";


// type UsersContainerType = {
//     users: UsersType[]
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users: UsersType[]) => void
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     setTotalUsersCount: (count: number) => void
//     setCurrentPage: (page: number) => void
//     isFetching: boolean
//     toggleIsFetching: (isFetching: boolean) => void
// }

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (toggle: boolean) => void
}
type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType


export class UsersContainer extends Component<UsersContainerType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        // let {
        //     users,
        //     follow,
        //     unfollow,
        //     pageSize,
        //     totalUsersCount,
        //     currentPage,
        //     isFetching,
        //     followingInProgress
        // } = this.props;

        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
    }
)(UsersContainer);

// альтернативная типизация state
// const mapStateToProps = ({usersPage}: {usersPage: InitialStateType}): MapStateToPropsType => {
//     return {
//         users: usersPage.users,
//         pageSize: usersPage.pageSize,
//         totalUsersCount: usersPage.totalUsersCount,
//         currentPage: usersPage.currentPage,
//         isFetching: usersPage.isFetching
//     }
// }

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