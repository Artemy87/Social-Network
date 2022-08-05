import {v1} from "uuid";

const initialState: InitialStateType = {
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
}

export const dialogsReducer = (state:InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageBody}]
            }
        }

        default: return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody}) as const;

//types
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type InitialStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type DialogsActionsType =
    | ReturnType<typeof sendMessageCreator>;