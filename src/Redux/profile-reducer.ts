import {v1} from "uuid";
import {ProfileUserType} from "../components/Profile/ProfileContainer";
// import {ProfileContainerType} from "../Profile/ProfileContainer";

export type PostsType = {
    id: string
    name: string
    message: string
    time: string
    like: number
}
export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    newText: string
    profile: ProfileUserType | null
}

const initialState: InitialStateType = {
    posts: [],
    newPostText: '',
    newText: '',
    profile: null,
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: v1(), name: 'Vica', message: state.newPostText, time: '09:10', like: 15}
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }

        default: {
            return state
        }
    }
}

export type ProfileActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile>


export const addPost = () => {
    return {type: 'ADD-POST'} as const
};

export const updateNewPostText = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText} as const
};

export const setUserProfile = (profile: ProfileUserType) => {
    return {type: "SET-USER-PROFILE", profile} as const
};
