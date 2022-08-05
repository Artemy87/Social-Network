import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppActionsType, AppStateType} from "../../../Redux/redux-store";
import {addPost, PostsType} from "../../../Redux/profile-reducer";

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//types
type MapStateToPropsType = {
    posts: PostsType[]
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}