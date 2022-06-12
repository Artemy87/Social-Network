import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {UsersType} from "../Redux/users-reducer";
import SuperButton from "../SuperButton/SuperButton";
import styles from "./Users.module.css";
import Preloader from "../common/preloader/Preloader";
import axios from "axios";

type UserPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    isFetching: boolean
}

export const Users: FC<UserPropsType> = (props) => {

    let {
        users,
        follow,
        unfollow,
        pageSize,
        totalUsersCount,
        currentPage,
        onPageChanged,
        isFetching,
    } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <div className={styles.pagesContainer}>
                {pages.map(p => {
                    return (
                        <span key={p}
                              className={currentPage === p ? `${styles.pagesCount} ${styles.selected}` : styles.pagesCount}
                              onClick={() => {
                                  onPageChanged(p)
                              }}
                        >{p}</span>
                    )
                })}
            </div>
            {
                isFetching
                    ? users.map(u => {
                        return (
                            <div key={u.id} className={styles.user}>
                                <div className={styles.profile}>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <div className={styles.photo}>
                                            {u.photos?.small
                                                ? <img src={u.photos.small} alt="user photo"/>
                                                : <img
                                                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'}
                                                    alt='user photo'/>
                                            }
                                        </div>
                                    </NavLink>
                                    <div>
                                        {u.followed
                                            ? <SuperButton
                                                className={u.followed ? styles.unfollowButton : styles.followButton}
                                                onClick={
                                                    () => {
                                                        let baseURL = `https://social-network.samuraijs.com/api/1.0`;
                                                        axios.delete(`${baseURL}/follow/${u.id}`, {
                                                            withCredentials: true,
                                                            headers: {
                                                                'API-KEY': '57c8177e-0cc1-45bd-9287-f4d1570cbc36'
                                                            },
                                                        })
                                                            .then((response) => {
                                                                response.data.resultCode == 0 &&
                                                                unfollow(u.id)
                                                            })
                                                    }
                                                }>unfollow</SuperButton>
                                            : <SuperButton
                                                className={u.followed ? styles.unfollowButton : styles.followButton}
                                                onClick={
                                                    () => {
                                                        let baseURL = `https://social-network.samuraijs.com/api/1.0`;
                                                        axios.post(`${baseURL}/follow/${u.id}`, {}, {
                                                            withCredentials: true,
                                                            headers: {
                                                                'API-KEY': '57c8177e-0cc1-45bd-9287-f4d1570cbc36'
                                                            },
                                                        })
                                                            .then((response) => {
                                                                response.data.resultCode == 0 &&
                                                                follow(u.id);
                                                            })
                                                    }
                                                }>follow</SuperButton>
                                        }
                                    </div>
                                </div>
                                <div className={styles.message}>
                                    <div className={styles.header}>
                                        <div className={styles.name}>{u.name}</div>
                                        <div
                                            className={styles.location}>{'`${u.location.city}, ${u.location.country}`'}</div>
                                        {/*<div className={styles.location}>{`${u.id}`}</div>*/}
                                    </div>
                                    <div className={styles.bodyMessage}>body message</div>
                                    <div className={styles.statusContainer}>
                                        <div className={styles.status}>status</div>
                                        <div>{u.status}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : <Preloader/>
            }
            <div className={styles.showMoreButton}>
                <SuperButton className={styles.superButton}>show more</SuperButton>
            </div>
        </div>
    )
}