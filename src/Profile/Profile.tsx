import React, { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import { PostsPageType } from "../Redux/state";

type ProfilePropsType = {
    profilePage: PostsPageType
}

export const Profile:FC<ProfilePropsType> = ({ profilePage }) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts posts={ profilePage.posts }/>
        </div>
    )
}