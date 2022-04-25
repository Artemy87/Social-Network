import {v1} from "uuid";

export type FriendType = {
    id: string
    name: string
}

export type InitialStateType = {
    friends: FriendType[]
}

const initialState:InitialStateType = {
        friends: [
            {id: v1(), name: 'Katya'},
            {id: v1(), name: 'Irina'},
            {id: v1(), name: 'Misha'},
        ]
}

export const sidebarReducer = (state:InitialStateType = initialState, action: FriendType):InitialStateType => {
    switch (action) {
        default: return {...state}
    }
}
