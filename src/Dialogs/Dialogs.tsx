import React, {ChangeEvent, FC, KeyboardEvent} from 'react';

import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../Redux/state';
import s from './Dialogs.module.css'
import SuperButton from "../SuperButton/SuperButton";
import SuperInputText from "../SuperInputText/SuperInputText";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {ActionsTypes} from "../Redux/store";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}

export const Dialogs:FC<DialogsPropsType> = ({
    dialogsPage,
    dispatch,
    newMessageBody
}) => {

    const onSendMessageHandler = () => {
        dispatch(sendMessageCreator())
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }

    const onKeyPressMessageHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter') && dispatch(sendMessageCreator())
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

