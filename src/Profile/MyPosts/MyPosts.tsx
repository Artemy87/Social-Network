import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {PostsType} from '../../Redux/state';
import SuperInputText from "../../SuperInputText/SuperInputText";
import SuperButton from "../../SuperButton/SuperButton";
import {addPostCreator, updatePostTextChangeCreator} from "../../Redux/profileReducer";
import {ActionsTypes} from "../../Redux/store";

type MyPostsPropsType = {
    posts: PostsType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts: FC<MyPostsPropsType> = ({
        posts,
        dispatch,
        newPostText,
    }) => {

    let postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post}/>
        )}
    )

    const onAddPostHandler = () => {
        dispatch(addPostCreator())
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch( updatePostTextChangeCreator(e.currentTarget.value) )
    }

    const onKeyPressPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter') && dispatch(addPostCreator())
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
