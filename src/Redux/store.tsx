import {v1} from "uuid";

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export interface DialogsPageType {
    dialogs: DialogType[];
    messages: MessageType[];
    newMessageBody: string;
}
export type PostsType = {
    id: string
    name: string
    message: string
    time: string
    like: number
}
export interface PostsPageType {
    posts: PostsType[]
    newPostText: string
}
export type FriendsType = {
    id: string
    name: string
}
export type SidebarType = {
    friends: FriendsType[]
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
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostCreator> |
    ReturnType<typeof updatePostTextChangeCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>;


export const addPostCreator = () => ({type: 'ADD-POST'}) as const;
export const updatePostTextChangeCreator = (text:string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
}) as const;
export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'}) as const;
export const updateNewMessageBodyCreator = (text:string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text
}) as const;

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
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: v1(),
                name: 'Vica',
                message: this._state.profilePage.newPostText,
                time: '09:10',
                like: 15
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscribe()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe()

        } else if(action.type === 'SEND-MESSAGE') {
            const newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscribe()

        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscribe()
        }
    }
}
