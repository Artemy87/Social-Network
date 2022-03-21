import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/dialogs'>Messages</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/music'>Music</NavLink>
                <NavLink to='settings'>Settings</NavLink>
        </div>
    )
}
