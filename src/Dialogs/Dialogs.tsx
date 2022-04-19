import React, {ChangeEvent, FC, KeyboardEvent} from 'react';

import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../Redux/store';
import s from './Dialogs.module.css'
import SuperButton from "../SuperButton/SuperButton";
import SuperInputText from "../SuperInputText/SuperInputText";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageBody: string,
    onSendMessage: ()=> void,
    onUpdateMessage: (body: string) => void,
}

export const Dialogs:FC<DialogsPropsType> = ({
    dialogsPage,
    newMessageBody,
    onSendMessage,
    onUpdateMessage,
}) => {

    const onSendMessageHandler = () => {
        onSendMessage()
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onUpdateMessage(e.currentTarget.value)
    }

    const onKeyPressMessageHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter') && onSendMessage()
    }

    return (
        <div className={s.dialogsContainer}>
            <div>
                <DialogsItem dialogs={dialogsPage.dialogs}/>
            </div>

            <div>
                <Message messages={dialogsPage.messages}/>
            </div>

            <div className={s.sendMessageForm}>
                <SuperInputText
                    value={newMessageBody}
                    onChange={onChangeMessageHandler}
                    onKeyPress={onKeyPressMessageHandler}/>
                <SuperButton onClick={onSendMessageHandler}>add message</SuperButton>
            </div>
        </div>
    );
};

