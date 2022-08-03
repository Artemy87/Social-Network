import React, {FC} from "react";
import styles from './Login.module.css';

type HeaderPropsType = {
}

export const Login: FC<HeaderPropsType> = (props) => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.phraseStart}>
                Please log in to the app
            </div>
            <div className={styles.phraseEnd}>
                or log in
            </div>
        </div>
    )
}