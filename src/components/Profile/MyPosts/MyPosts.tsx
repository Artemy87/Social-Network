import React, {FC} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {reduxForm} from "redux-form";
import {AddNewMyPostForm} from "./AddNewMyPostForm/AddNewMyPostForm";

export const MyPosts: FC<MyPostsPropsType> = ({
                                                  posts,
                                                  addPost,
                                              }
) => {

    let postsElements = posts.map(post => {
            return (
                <Post key={post.id} post={post}/>
            )
        }
    )

    const onAddPost = (value: FormMyPostsDataType) => {
        console.log(value)
        addPost(value.newPostText)
    }

    return (
        <div>
            <div className={s.post}>
                {postsElements}
            </div>
            <ReduxMyPostForm onSubmit={onAddPost}/>
        </div>
    )
}

const ReduxMyPostForm = reduxForm<FormMyPostsDataType>({form: 'profileAddNewPostForm'})(AddNewMyPostForm);

//types
export type FormMyPostsDataType = {
    newPostText: string
}
