import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { Post } from './Post/Post';
import s from './MyPosts.module.css';
import { PostsType } from '../../Redux/state';
import SuperInputText from "../../SuperInputText/SuperInputText";
import SuperButton from "../../SuperButton/SuperButton";

type MyPostsPropsType = {
    posts:PostsType[]
    addPost:(postMessage:string) => void
}

export const MyPosts = (props:MyPostsPropsType) => {

    const [titlePost, setTitlePost] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitlePost(e.currentTarget.value);
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            props.addPost(titlePost)
            setTitlePost('')
        }
    }

    const onClickHandler = () => {
        props.addPost(titlePost)
        setTitlePost('')
    }

    return (
        <div className={s.myPosts}>
            <div className={s.post}>
                {
                    props.posts.map(post => {
                        return (
                            <Post key={post.id} post={post}/>
                        )
                    })
                }
            </div>
            <div className={s.postForm}>
                <div className={s.sendPostForm}>
                    <SuperInputText className={s.superInput}
                                    value={titlePost}
                                    onChange={onChangeHandler}
                                    onKeyPress={onKeyPressHandler} />
                    <SuperButton className={s.superButton}
                                 onClick={onClickHandler}>add post</SuperButton>
                </div>
            </div>
        </div>
    )
}