import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {Profile} from "./Profile";
import {addPost, setUserProfile, updateNewPostText} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
//     aboutMe: string
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: {
//         github: string
//         vk: string
//         facebook: string
//         instagram: string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
//     photos: {
//         small: string
//         large: string
//     }
}
export type MapStatePropsType = {
    profile: ProfileUserType | null
}
// export type MapDispatchPropsType = {
//     addPost: () => void
//     updateNewPostText: (newText: string) => void
//     setUserProfile: (profile: ProfileUserType) => void
// }
type OwnProfileContainerType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType | null

}
type PathParamsType = {
    userId: string,
}
type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProfileContainerType;

export class ProfileContainer extends Component<ProfileContainerType> {

    baseURL = `https://social-network.samuraijs.com/api/1.0/`;

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '23660';
        }
        axios.get(`${this.baseURL}profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
            .catch(error => {
                return `Error getting a profile: ${error}`
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
    mapStateToProps,
    {
        addPost,
        updateNewPostText,
        setUserProfile
    }
)(WithUrlDataContainerComponent);