import React, {FC} from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

export const Header: FC<HeaderPropsType> = (props) => {

    return (
        <header className={styles.header}>
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBAq8gSI8UYfdWiomqzJBnq9zhTJtF1_LJA&usqp=CAU" alt=""/>*/}
            <div className={styles.logo}></div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>
                        <div>{props.login}</div>
                        <button onClick={props.logOut}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>login</NavLink>
                }</div>
        </header>
    )
}

//types
// type HeaderPropsType = {
//     login: string | null
//     isAuth: boolean
//     logOut: () => void
//     // setAuthUserData: (id: number, email: string, login: string) => void
// }