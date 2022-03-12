import React from "react";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBAq8gSI8UYfdWiomqzJBnq9zhTJtF1_LJA&usqp=CAU" alt=""/>*/}
            <div className={styles.logo}></div>
        </header>
    )
}