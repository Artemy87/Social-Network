import {v1} from "uuid";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
type PostsType = {
    id: string
    name: string
    message: string
    time: string
    like: number
}
type PostsPageType = {
    posts: PostsType[]
    newPostText: string
}
type FriendsType = {
    id: string
    name: string
}
type SidebarType = {
    friends: FriendsType[]
}

interface RootStateType {
    dialogsPage: DialogsPageType
    profilePage: PostsPageType
    sidebar: SidebarType
}
type StoreType = {
    _state: RootStateType
    _callSubscribe: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

export let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Valera'},
                {id: v1(), name: 'Inna'},
                {id: v1(), name: 'Anna'},
            ],
            messages: [
                {id: v1(), message: 'My name is Dima'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Yo!'},
                {id: v1(), message: 'My number +0034024'},
            ],
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                {id: v1(), name: 'Oleg', message: 'Hi! How are you?', time: '8:26', like: 8},
                {id: v1(), name: 'Kolya', message: 'Hello! My number +231314', time: '3:43', like: 33},
                {id: v1(), name: 'Vica', message: 'My name is Vica', time: '09:10', like: 15},
                {id: v1(), name: 'Nikita', message: 'Ye', time: '09:10', like: 15},
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {id: v1(), name: 'Katya'},
                {id: v1(), name: 'Irina'},
                {id: v1(), name: 'Misha'},
            ]
        }
    },

    _callSubscribe() {
        console.log('store _callSubscribe')
    },

    subscribe(observer: () => void) {
        this._callSubscribe = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe();
    }
}
