import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AllAppActionsType, AppStateType} from "../../Redux/redux-store";
import {addPostCreator, PostsType, updatePostTextChangeCreator} from "../../Redux/profileReducer";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updatePost: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>): MapDispatchToPropsType => {
    return {
        updatePost: (text: string) => {
            dispatch(updatePostTextChangeCreator(text))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

export const MyPostContainer = connect(
    mapStateToProps, mapDispatchToProps)(MyPosts)