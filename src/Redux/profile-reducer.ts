import {v1} from "uuid";
import {ProfileUserType} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const initialState: InitialStateType = {
    posts: [],
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: v1(), name: 'Vica', message: action.newPostText, time: '09:10', like: 15}
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }

        default: {
            return state
        }
    }
}

export const addPost = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const);
const setUserProfile = (profile: ProfileUserType) => ({type: "SET-USER-PROFILE", profile} as const);
const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const);

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

//types
export type ProfileActionsTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type PostsType = {
    id: string
    name: string
    message: string
    time: string
    like: number
}
export type InitialStateType = {
    posts: PostsType[]
    profile: ProfileUserType | null
    status: string
}