import React, { FC } from "react";
import s from './Post.module.css'
import { PostsType } from "../../../Redux/store";

type PostPropsType = {
    post: PostsType
}

export const Post:FC<PostPropsType> = ({ post }) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU" alt=""/>
                <div>likes: { post.like }</div>
            </div>
            <div className={s.body}>
                <div className={s.name}>{ post.name }</div>
                <div>{ post.message }</div>
                <div>{ post.time }</div>
            </div>
        </div>
    )
}