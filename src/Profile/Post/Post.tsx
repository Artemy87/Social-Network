import React from "react";
import styles from './Post.module.css';

type PostPropsType = {
    title:string
    name:string
    like:number
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU" alt=""/>
                <div>likes: {props.like}</div>
            </div>
            <div className={styles.body}>
                <div>{props.title}</div>
                <div>{props.name}</div>
                <div>{props.message}</div>
            </div>
        </div>
    )
}