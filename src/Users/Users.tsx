import React, {Component} from 'react';
import {UsersType} from "../Redux/users-reducer";
import SuperButton from "../SuperButton/SuperButton";
import axios from 'axios';
import styles from './Users.module.css';

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
}

export class Users extends Component<UsersPropsType, {}> {
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

    baseURL = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`;

    componentDidMount() {
        axios.get(`${this.baseURL}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        axios.get(`${this.baseURL}&page=${p}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let {users, follow, unfollow, pageSize, totalUsersCount} = this.props;

        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={styles.users}>
            <div className={styles.pagesContainer}>
                {pages.map(p => {
                    return (
                        <span key={p}
                            className={this.props.currentPage === p ? `${styles.pagesCount} ${styles.selected}` : styles.pagesCount}
                            onClick={() => {this.onPageChanged(p)}}
                        >{p}</span>
                    )
                })}
            </div>
            {users.map(u => {
                return (
                    <div key={u.id} className={styles.user}>
                        <div className={styles.profile}>
                            <div className={styles.photo}>
                                {u.photos?.small
                                    ? <img src={u.photos.small} alt="user photo"/>
                                    : <img
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'}
                                        alt='user photo'/>
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

}

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
