import React, {FC} from 'react';

import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../Redux/state';
import s from './Dialogs.module.css'
import SuperButton from "../SuperButton/SuperButton";
import SuperInputText from "../SuperInputText/SuperInputText";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogsContainer}>
            <div>
                <DialogsItem dialogs={props.dialogsPage.dialogs}/>
            </div>

            <div>
                <Message messages={props.dialogsPage.messages}/>
            </div>

            <div className={s.sendMessageForm}>
                <SuperInputText />
                <SuperButton>add message</SuperButton>
            </div>
        </div>
    );
};

