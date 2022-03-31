import React, {ChangeEvent, FC, useState} from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { PostsType } from '../../Redux/state';

type MyPostsPropsType = {
    posts:PostsType[];
}

export const MyPosts:FC<MyPostsPropsType> = ({ posts }) => {

    const post = posts.map(post => {
        return (
            <Post key={post.id} post={post}/>
        )
    })

    return (
        <div className={styles.myPosts}>
            <div className={styles.post}>
                {post}
            </div>
            <div className={styles.postForm}>
            <div className={styles.sendMessageWindow}>
                <div>My post</div>
                <input />
                <button>add post</button>
            </div>
            </div>
        </div>
    )
}