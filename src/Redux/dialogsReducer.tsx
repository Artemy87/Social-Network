import {v1} from "uuid";
import {DialogsPageType, MessageType} from "./store";

export const dialogsReducer = (state: DialogsPageType, action: DialogsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        }
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.body
            return state
        }

        default: return state
    }
}

export type DialogsType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>
export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'}) as const;
export const updateNewMessageBodyCreator = (body:string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body
}) as const;