import React from 'react';
import styles from './Dialogs.module.css';


export const Dialogs = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>Dialogs</div>
            <div className={styles.dialogsContainer}>
                <div className={styles.dialogs}>
                    <div className={styles.dialog}>Dima</div>
                    <div className={styles.dialog}>Valera</div>
                    <div className={styles.dialog}>Inna</div>
                    <div className={styles.dialog}>Victor</div>
                </div>
                <div className={styles.messages}>
                    <div>My name's Denis</div>
                    <div>How are you?</div>
                    <div>Yo!</div>
                    <div>Hi</div>
                    <div>My number +0034024</div>
                </div>
            </div>
        </div>
    );
};
