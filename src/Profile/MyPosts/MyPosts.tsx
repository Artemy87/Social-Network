import React from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css';
import {PostsPageType} from '../../App';

type MyPostsPropsType = {
    postsPage: PostsPageType
}

export const MyPosts = (props:MyPostsPropsType) => {

    const post = props.postsPage.posts.map(post => {
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
                <textarea name="" id=""></textarea>
                <button>add post</button>
            </div>
            </div>
        </div>
    )
}