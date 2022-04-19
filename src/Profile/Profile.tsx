import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    )
}