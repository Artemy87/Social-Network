import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src="" alt="avatarka"/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}