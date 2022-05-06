import React, {FC} from 'react';
import {UsersType} from "../Redux/users-reducer";
import styles from './Users.module.css'
import SuperButton from "../SuperButton/SuperButton";
import {v1} from "uuid";

type UsersPropsType = {
    users: UsersType[],
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              follow,
                                              unfollow,
                                              setUsers
                                          }) => {

    if (users.length === 0) {
        setUsers([
                {id: v1(), followed: true, name: 'Dimych', status: 'I am boss', location: {city: 'Moscow', country: 'Russia'}, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'},
                {id: v1(), followed: false, name: 'Katya', status: 'Im boss', location: {city: 'Kiev', country: 'Ukraine'}, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'},
            ]
        )
    }

    return (
        <div className={styles.user}>
            {users.map(u => {
                return (
                    <div key={u.id} className={styles.grid1}>
                        <div className={styles.grid12}>
                            <div>
                                <img src={u.photoUrl} alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <SuperButton
                                        className={u.followed ? styles.unfollowButton : styles.followButton}
                                        onClick={() => {unfollow(u.id)}}>unfollow</SuperButton>
                                    : <SuperButton
                                        className={u.followed ? styles.unfollowButton : styles.followButton}
                                        onClick={() => {follow(u.id)}}>follow</SuperButton>
                                }
                            </div>
                        </div>
                        <div className={styles.grid2}>
                            <div className={styles.grid21}>
                                <div>{`name: ${u.name}`}</div>
                                <div className={styles.location}>{`${u.location.city}, ${u.location.country}`}</div>
                            </div>
                            <div className={styles.status}>{`status: ${u.status}`}</div>
                        </div>
                    </div>
                )
            })}
            <SuperButton>show more</SuperButton>
        </div>
    );
};
