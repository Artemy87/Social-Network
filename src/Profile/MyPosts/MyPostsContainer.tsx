import React from 'react';
import {addPostCreator, updatePostTextChangeCreator} from "../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AllAppActionsType, AllStateType} from "../../Redux/redux-store";


let mapStateToProps = (state:AllStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>) => {
    return {
        onAddPost: () => {
            dispatch(addPostCreator())
        },
        onPostChange: (text: string) => {
            dispatch(updatePostTextChangeCreator(text))
        }
    }
}

export const MyPostContainer
    = connect(mapStateToProps, mapDispatchToProps)(MyPosts)