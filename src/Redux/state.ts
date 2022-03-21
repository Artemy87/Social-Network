export type DialogType = {
    id:number
    name:string
}
export type MessageType = {
    id:number
    message:string
}
export interface DialogsPageType {
    dialogs:DialogType[];
    messages:MessageType[]
}
export type PostsType = {
    id:number
    name:string
    message:string
    time:string
    like:number
}
export interface PostsPageType {
    posts:PostsType[]
}
export interface RootStateType {
    dialogsPage:DialogsPageType
    profilePage:PostsPageType
}

let state:RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Inna'},
            {id: 4, name: 'Anna'},
        ],
        messages: [
            {id: 1, message: 'My name is Dima'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'My number +0034024'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, name: 'A', message: 'Hi! How are you?', time: '8:26', like: 8},
            {id: 2, name: 'B', message: 'My number +231314', time: '3:43', like: 33},
            {id: 3, name: 'C', message: 'My names Victor', time: '09:10', like: 15},
        ]
    }
}

export default state;