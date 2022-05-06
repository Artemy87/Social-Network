import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppActionsType, AppStateType} from "../../Redux/redux-store";
import {addPostCreator, PostsType, updatePostTextChangeCreator} from "../../Redux/profile-reducer";

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
    debugger
    return {
        updatePost: (text: string) => {
            dispatch(updatePostTextChangeCreator(text))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)