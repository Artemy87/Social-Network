import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../Redux/users-reducer";
import SuperButton from "../SuperButton/SuperButton";
import styles from "./Users.module.css";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type UserPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageSize: number) => void
    isFetching: boolean
    followingInProgress: boolean
    toggleFollowingProgress: (toggle: boolean) => void

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
        followingInProgress,
        toggleFollowingProgress,
    } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <div className={styles.pagesContainer}>
                {pages.map(page => {
                    return (
                        <span key={page}
                              className={currentPage === page ? `${styles.pagesCount} ${styles.selected}` : styles.pagesCount}
                              onClick={() => {
                                  onPageChanged(page)
                              }}
                        >{page}</span>
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
                                                disabled={followingInProgress}
                                                className={u.followed ? styles.unfollowButton : styles.followButton}
                                                onClick={() => {
                                                    toggleFollowingProgress(true);
                                                    usersAPI.unfollowUser(u.id)
                                                        .then((data) => {
                                                            if (data.resultCode === 0) {
                                                                unfollow(u.id)
                                                            }
                                                            toggleFollowingProgress(false);
                                                        });
                                                }
                                                }>unfollow</SuperButton>
                                            : <SuperButton
                                                disabled={followingInProgress}
                                                className={u.followed ? styles.unfollowButton : styles.followButton}
                                                onClick={() => {
                                                    toggleFollowingProgress(true);
                                                    usersAPI.followUser(u.id)
                                                        .then((data) => {
                                                            if (data.resultCode === 0) {
                                                                follow(u.id);
                                                            }
                                                            toggleFollowingProgress(false);
                                                        });
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