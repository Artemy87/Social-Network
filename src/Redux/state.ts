import {v1} from "uuid";

export type DialogType = {
    id:string
    name:string
}
export type MessageType = {
    id:string
    message:string
}
export interface DialogsPageType {
    dialogs:DialogType[];
    messages:MessageType[]
}
export type PostsType = {
    id:string
    name:string
    message:string
    time:string
    like:number
}
export interface PostsPageType {
    posts:PostsType[]
}
export type FriendType = {
    id:string
    name:string
}
export type SidebarType = {
    friends: FriendType[]
}

export interface RootStateType {
    dialogsPage: DialogsPageType
    profilePage: PostsPageType
    sidebar: SidebarType
}

let state:RootStateType = {
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
            {id: v1(), name: 'Kolya', message: 'My number +231314', time: '3:43', like: 33},
            {id: v1(), name: 'Vica', message: 'My names Victor', time: '09:10', like: 15},
            // {id: v1(), name: 'Kirill', message: 'My names Victor', time: '09:10', like: 15},
            // {id: v1(), name: 'Sasha', message: 'My names Victor', time: '09:10', like: 15},
            // {id: v1(), name: 'Ludmila', message: 'My names Victor', time: '09:10', like: 15},
            // {id: v1(), name: 'Semen', message: 'My names Victor', time: '09:10', like: 15},
        ]
    },
    sidebar: {
        friends: [
            {id:v1(), name: 'Katya'},
            {id:v1(), name: 'Irina'},
            {id:v1(), name: 'Misha'},
        ]
    }
}



export default state;