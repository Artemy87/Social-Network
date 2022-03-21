import React from 'react';
import styles from './Message.module.css'
import {MessageType} from '../../App';

type MessagePropsType = {
    messages:MessageType[]
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={styles.messages}>
            {props.messages.map( m => <div key={m.id} className={styles.messages}>{m.message}</div> )}
        </div>
    )
}