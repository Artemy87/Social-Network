import React, { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import {PostsPageType} from "../Redux/state";
import {ActionsTypes} from "../Redux/store";

type ProfilePropsType = {
    profilePage: PostsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile:FC<ProfilePropsType> = ({ profilePage, dispatch }
) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}