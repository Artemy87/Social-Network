import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'; // middleware
import { reducer as formReducer } from 'redux-form';

import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";

// interface DialogsPageType {
//     dialogs: DialogType[];
//     messages: MessageType[];
//     newMessageBody: string;
// }
// interface PostsPageType {
//     posts: PostsType[]
//     newPostText: string
// }
// type SidebarType = {
//     friends: FriendsType[]
// }
// type DialogType = {
//     id: string
//     name: string
// }
// type MessageType = {
//     id: string
//     message: string
// }
// type PostsType = {
//     id: string
//     name: string
//     message: string
//     time: string
//     like: number
// }
// type FriendsType = {
//     id: string
//     name: string
// }
// export interface RootStateType {
//     dialogsPage: DialogsPageType
//     profilePage: PostsPageType
//     sidebar: SidebarType
// }
// export type StoreType = {
//     _state: RootStateType
//     _callSubscribe: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: any) => void
// }

export type AppActionsType =
    | DialogsActionsType
    | ProfileActionsTypes
    | UsersActionType
    | AuthActionsType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
