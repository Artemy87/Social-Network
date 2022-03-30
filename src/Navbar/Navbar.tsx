import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <div className={s.navbar}>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/dialogs'>Messages</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/music'>Music</NavLink>
                <NavLink to='settings'>Settings</NavLink>
            </div>
            <div className={s.titleFriends}>Friends</div>
            <div className={s.friends}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU" alt=""/>
                    Andrey
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU" alt=""/>
                    Sasha</div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU" alt=""/>
                    Svetlana
                </div>
            </div>
        </div>
    )
}
