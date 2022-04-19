import {v1} from "uuid";
import {PostsType} from "./store";

const initialState = {
    posts: [
        {id: v1(), name: 'Oleg', message: 'Hi! How are you?', time: '8:26', like: 8},
        {id: v1(), name: 'Kolya', message: 'Hello! My number +231314', time: '3:43', like: 33},
        {id: v1(), name: 'Vica', message: 'My name is Vica', time: '09:10', like: 15},
        {id: v1(), name: 'Nikita', message: 'Ye', time: '09:10', like: 15},
    ],
    newPostText: ''
}

export const profileReducer = (state=initialState, action:ProfileActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: v1(),
                name: 'Vica',
                message: state.newPostText,
                time: '09:10',
                like: 15
            }

            state.newPostText = ''
            return { ...state, posts: [...state.posts, newPost] }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }

        default: return state
    }
}

export type ProfileActionsTypes = ReturnType<typeof addPostCreator> | ReturnType<typeof updatePostTextChangeCreator>

export const addPostCreator = () => ({
        type: 'ADD-POST'
}) as const;

export const updatePostTextChangeCreator = (newText:string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText
}) as const;


// export const profileReducer = (state: InitialStateType = initialState, action: ActionProfileType):InitialStateType => {
//     switch (action.type) {
//         case 'ADD_POST':
//             let newPost = {
//                 id: 6,
//                 message: state.newPostText,
//                 likeCount: 0,
//             };
//             return {
//                 ...state,
//                 posts: [...state.posts, newPost],
//                 newPostText: ''
//             };
//         case 'UPDATE_NEW_POST_TEXT': {
//             return {
//                 ...state,
//                 newPostText: action.newText
//             };
//         }
//         default:
//             return state;
//     }
// }