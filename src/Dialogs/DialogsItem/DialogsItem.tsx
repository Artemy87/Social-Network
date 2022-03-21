import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './DialogsItem.module.css';
import {DialogType} from '../../App';

type DialogsItemPropsType = {
    dialogs: DialogType[]
}

export const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={styles.dialogs}>
            {props.dialogs.map(d => {
                const path = `/dialogs/1`;
                return (
                    <div key={d.id} className={styles.dialog}>
                        <NavLink to={`/dialogs/${path}`}>{d.name}</NavLink>
                    </div>
                )
            })
            }
        </div>
    )
}