import React, {FC} from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    // setAuthUserData: (id: number, email: string, login: string) => void
}

export const Header: FC<HeaderPropsType> = (props) => {
    return (
        <header className={styles.header}>
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBAq8gSI8UYfdWiomqzJBnq9zhTJtF1_LJA&usqp=CAU" alt=""/>*/}
            <div className={styles.logo}></div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}</div>
                    : <NavLink to={'/login'}>login</NavLink>
                }</div>
        </header>
    )
}