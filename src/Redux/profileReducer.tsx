import {v1} from "uuid";
import {PostsPageType, PostsType} from "./store";

export const profileReducer = (state:PostsPageType, action:ProfileTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: v1(),
                name: 'Vica',
                message: state.newPostText,
                time: '09:10',
                like: 15
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText
            return state;
        }

        default: return state
    }
}

export type ProfileTypes = ReturnType<typeof addPostCreator> | ReturnType<typeof updatePostTextChangeCreator>
export const addPostCreator = () => ({type: 'ADD-POST'}) as const;
export const updatePostTextChangeCreator = (newText:string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText
}) as const;