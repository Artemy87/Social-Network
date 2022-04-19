import {combineReducers, createStore} from "redux";

import {ProfileActionsTypes, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


export interface DialogsPageType {
    dialogs: DialogType[];
    messages: MessageType[];
    newMessageBody: string;
}
export interface PostsPageType {
    posts: PostsType[]
    newPostText: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    name: string
    message: string
    time: string
    like: number
}
export type FriendsType = {
    id: string
    name: string
}

export interface RootStateType {
    dialogsPage: DialogsPageType
    profilePage: PostsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _callSubscribe: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

export type AllAppActionsType = DialogsActionsType | ProfileActionsTypes
export type AllStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

export let store = createStore(reducers);



