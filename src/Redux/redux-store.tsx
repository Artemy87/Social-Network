import {combineReducers, createStore} from "redux";

import {ProfileActionsTypes, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


interface DialogsPageType {
    dialogs: DialogType[];
    messages: MessageType[];
    newMessageBody: string;
}
interface PostsPageType {
    posts: PostsType[]
    newPostText: string
}
type SidebarType = {
    friends: FriendsType[]
}
type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
type PostsType = {
    id: string
    name: string
    message: string
    time: string
    like: number
}
type FriendsType = {
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


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);
