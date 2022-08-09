import React, {Component} from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class ProfileContainer extends Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect, // защищает вкладку Profile от незалогиненного пользователя
    withRouter
)(ProfileContainer)


//types
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | undefined
        large: string | undefined
    }

    /*    userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
        photos: {
            small: string
            large: string
        }*/
};
export type MapStatePropsType = {
    profile: ProfileUserType | null
    status: string
    authorizedUserId: string | null
};
type OwnProfileContainerType = {
    getUserProfile: (userId: string | null) => void
    getStatus: (userId: string | null) => void
    updateStatus: (status: string | null) => void
    profile: ProfileUserType | null
    isAuth: boolean
    status: string
    authorizedUserId: string
};
type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProfileContainerType;
type PathParamsType = {
    userId: string,
};