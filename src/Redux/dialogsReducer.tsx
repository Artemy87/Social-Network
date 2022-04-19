import {v1} from "uuid";
import {DialogsPageType, MessageType} from "./store";

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state=initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageBody
            }

            state.newMessageBody = ''

            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {...state, newMessageBody: action.body}
        }

        default: return state
    }
}

export type DialogsActionsType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'}) as const;

export const updateNewMessageBodyCreator = (body:string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body
}) as const;