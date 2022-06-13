import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppActionsType, AppStateType} from "../../../Redux/redux-store";
import {addPost, PostsType, updateNewPostText} from "../../../Redux/profile-reducer";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updatePost: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        updatePost: (text: string) => {
            dispatch(updateNewPostText(text))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)