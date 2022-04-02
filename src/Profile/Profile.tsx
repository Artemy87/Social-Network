import React, { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import { PostsPageType } from "../Redux/state";

type ProfilePropsType = {
    profilePage: PostsPageType
    addPost: (postMessage:string) => void
}

export const Profile:FC<ProfilePropsType> = (
    { profilePage, addPost }) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts
                posts={ profilePage.posts }
                addPost={addPost}/>
        </div>
    )
}