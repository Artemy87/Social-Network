import {v1} from "uuid";

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
    newMessageBody: string
}

const initialState = {
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
}

export const dialogsReducer = (state:InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case 'SEND-MESSAGE': {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: v1(), message: state.newMessageBody}]
            }
        }

        default: return state
    }
}

export type DialogsActionsType =
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => ({
        type: 'SEND-MESSAGE'
}) as const;

export const updateNewMessageBodyCreator = (body:string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body
}) as const;