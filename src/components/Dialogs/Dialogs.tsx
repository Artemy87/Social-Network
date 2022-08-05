import React, {FC} from 'react';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";
import s from './Dialogs.module.css'
import {reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

export const Dialogs: FC<DialogsPropsType> = (
    {
        dialogsPage,
        onSendMessage,
    }) => {
    const addNewMessage = (value: FormDialogsDataType) => {
        console.log(value.newMessageBody)
        onSendMessage(value.newMessageBody);
    }

    return (
        <div className={s.dialogsContainer}>
            <div>
                <DialogsItem dialogs={dialogsPage.dialogs}/>
            </div>
            <div>
                <Message messages={dialogsPage.messages}/>
            </div>
            <ReduxDialogsForm onSubmit={addNewMessage}/>
        </div>
    );
};

const ReduxDialogsForm = reduxForm<FormDialogsDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);

//types
export type FormDialogsDataType = {
    newMessageBody: string
}