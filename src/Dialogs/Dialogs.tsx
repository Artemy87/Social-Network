import React, {FC} from 'react';

import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../Redux/state';
import styles from './Dialogs.module.css'


type DialogsPropsType = {
    dialogsPage:DialogsPageType
}

export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Dialogs</div>
            <div className={styles.dialogsContainer}>
                <div>
                    <DialogsItem dialogs={props.dialogsPage.dialogs}/>
                </div>
                <div>
                    <Message messages={props.dialogsPage.messages}/>
                </div>
            </div>
        </div>
    );
};

