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
    messages: MessageType[]
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

let rerenderEntireTree = () => {
    console.log('state changed')
}

let state: RootStateType = { // прописать export default state;
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
        ]
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
}

export const addPost = () => {
    const newPost: PostsType = {
        id: v1(),
        name: 'Vica',
        message: state.profilePage.newPostText,
        time: '09:10',
        like: 15
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    console.log(newText)
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}
// export default store;