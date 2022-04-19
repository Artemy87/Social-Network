import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {PostsType} from '../../Redux/store';
import SuperInputText from "../../SuperInputText/SuperInputText";
import SuperButton from "../../SuperButton/SuperButton";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    onAddPost: () => void
    onPostChange: (text: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({
        posts,
        newPostText,
        onAddPost,
        onPostChange
    }) => {

    let postsElements = posts.map(post => {
        // debugger
        return (
            <Post key={post.id} post={post}/>
        )}
    )

    const onAddPostHandler = () => {
        onAddPost()
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onPostChange(e.currentTarget.value)
    }

    const onKeyPressPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter') && onAddPost()
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
