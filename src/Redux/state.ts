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
// type SidebarType = {}

export interface RootStateType {
    dialogsPage: DialogsPageType
    profilePage: PostsPageType
    // sidebar: SidebarType
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
            {id: 1, name: 'Oleg', message: 'Hi! How are you?', time: '8:26', like: 8},
            {id: 2, name: 'Kolya', message: 'My number +231314', time: '3:43', like: 33},
            {id: 3, name: 'Vica', message: 'My names Victor', time: '09:10', like: 15},
            // {id: 4, name: 'Kirill', message: 'My names Victor', time: '09:10', like: 15},
            // {id: 5, name: 'Sasha', message: 'My names Victor', time: '09:10', like: 15},
            // {id: 6, name: 'Ludmila', message: 'My names Victor', time: '09:10', like: 15},
            // {id: 7, name: 'Semen', message: 'My names Victor', time: '09:10', like: 15},
        ]
    },
    // sidebar: {}
}

export default state;