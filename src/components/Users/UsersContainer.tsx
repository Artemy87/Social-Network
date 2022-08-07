import React, {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {
    follow, unfollow, setCurrentPage,
    UsersType, toggleFollowingProgress, getUsers,
} from "../../Redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class UsersContainer extends Component<UsersContainerType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //thunk
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.currentPage); //thunk
        this.props.setCurrentPage(pageNumber); //?
    }

    render() {
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

export default compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers
        }
    ),
    withAuthRedirect // защищает вкладку Users от незалогиненного пользователя
)(UsersContainer)

//types
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
    // setUsers: (users: UsersType[]) => void
    // setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (toggle: boolean) => void
    getUsers: (pageSize: number, currentPage: number) => void
    // addUsersThunkCreator: (pageSize: number, currentPage: number) => (dispatch: any) => void
}
type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType


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