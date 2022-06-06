import React, {FC} from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "./ProfileContainer";

type ProfileType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType | null
}


export const Profile:FC<ProfileType> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer />
        </div>
    )
}