import React, { FC } from "react";
import styles from './Post.module.css'
import { PostsType } from "../../../Redux/state";

type PostPropsType = {
    post: PostsType
}

export const Post:FC<PostPropsType> = ({ post }) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU" alt=""/>
                <div>likes: { post.like }</div>
            </div>
            <div className={styles.body}>
                <div>{ post.name }</div>
                <div>{ post.message }</div>
                <div>{ post.time }</div>
            </div>
        </div>
    )
}