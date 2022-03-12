import React from "react";
import styles from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src="" alt="avatarka"/>
            </div>
            <div>
                ava + description
            </div>
            <div className='posts'>
                My post
                <div>
                    New Post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}