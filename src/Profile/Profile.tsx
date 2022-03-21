import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import {PostsPageType} from "../App";

type ProfilePropsType = {
    postsPage: PostsPageType
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts postsPage={props.postsPage}/>
        </div>
    )
}