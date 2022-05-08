import React, {Component} from 'react';
import {UsersType} from "../Redux/users-reducer";
import SuperButton from "../SuperButton/SuperButton";
import {v1} from "uuid";
import axios from 'axios';
import styles from './Users.module.css';

type UsersPropsType = {
    users: UsersType[],
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export class Users extends Component<UsersPropsType, {}> {

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    //
    //         this.props.setUsers([
    //                 {
    //                     id: v1(),
    //                     followed: true,
    //                     name: 'Dimych',
    //                     status: 'I am boss',
    //                     location: {city: 'Moscow', country: 'Russia'},
    //                     photosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU',
    //                 },
    //                 {
    //                     id: v1(),
    //                     followed: false,
    //                     name: 'Katya',
    //                     status: 'Im boss',
    //                     location: {city: 'Kiev', country: 'Ukraine'},
    //                     photosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU',
    //                 },
    //             ]
    //         )
    //     }
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        let {users, follow, unfollow} = this.props;

        return <div className={styles.users}>
            {users.map(u => {
                return (
                    <div key={u.id} className={styles.user}>
                        <div className={styles.profile}>
                            <div className={styles.photo}>
                                {u.photos?.small
                                    ? <img src={u.photos.small} alt=""/>
                                    : <img
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'}/>
                                }
                            </div>
                            <div>
                                {u.followed
                                    ? <SuperButton
                                        className={u.followed ? styles.unfollowButton : styles.followButton}
                                        onClick={() => {
                                            unfollow(u.id)
                                        }}
                                    >unfollow</SuperButton>
                                    : <SuperButton
                                        className={u.followed ? styles.unfollowButton : styles.followButton}
                                        onClick={() => {
                                            follow(u.id)
                                        }}
                                    >follow</SuperButton>
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
            })}
            <div className={styles.showMoreButton}>
                <SuperButton className={styles.superButton}>show more</SuperButton>
            </div>
        </div>
    }

};

/*
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
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })

        setUsers([
                {
                    id: v1(),
                    followed: true,
                    name: 'Dimych',
                    status: 'I am boss',
                    location: {city: 'Moscow', country: 'Russia'},
                    photosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU',
                },
                {
                    id: v1(),
                    followed: false,
                    name: 'Katya',
                    status: 'Im boss',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    photosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU',
                },
            ]
        )
    }

    return (
        <div className={styles.users}>
            {users.map(u => {
                return (
                    <div key={u.id} className={styles.user}>
                        <div className={styles.profile}>
                            <div className={styles.photo}>
                                {u.photos?.small
                                    ? <img src={u.photos.small} alt=""/>
                                    : <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'} />
                                }
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
                        <div className={styles.message}>
                            <div className={styles.header}>
                                <div className={styles.name}>{u.name}</div>
                                <div className={styles.location}>{'`${u.location.city}, ${u.location.country}`'}</div>
                                {/!*<div className={styles.location}>{`${u.id}`}</div>*!/}
                            </div>
                            <div className={styles.bodyMessage}>body message</div>
                            <div className={styles.statusContainer}>
                                <div className={styles.status}>status</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className={styles.showMoreButton}>
                <SuperButton className={styles.superButton}>show more</SuperButton>
            </div>
        </div>
    );
};*/
