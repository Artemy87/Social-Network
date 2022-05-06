import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import SuperInputText from "../../SuperInputText/SuperInputText";
import SuperButton from "../../SuperButton/SuperButton";
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        addPost,
        updatePost
    }) => {

    let postsElements = posts.map(post => {
            // debugger
            return (
                <Post key={post.id} post={post}/>
            )
        }
    )

    const onAddPostHandler = () => {
        newPostText.trim() !== '' && addPost()
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updatePost(e.currentTarget.value)
    }

    const onKeyPressPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter' && newPostText.trim() !== '') && addPost()
    }

    return (
        <div className={s.myPosts}>
            <div className={s.post}>
                {postsElements}
            </div>
            <div className={s.postForm}>
                <div className={s.sendPostForm}>
                    <SuperInputText value={newPostText}
                                    className={s.superInput}
                                    onChange={onChangePostHandler}
                                    onKeyPress={onKeyPressPostHandler}/>
                    <SuperButton className={s.superButton}
                                 onClick={onAddPostHandler}>add post</SuperButton>
                </div>
            </div>
        </div>
    )
}
