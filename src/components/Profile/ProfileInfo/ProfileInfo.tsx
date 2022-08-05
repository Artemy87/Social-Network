import React, {FC} from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileUserType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus';

export const ProfileInfo: FC<ProfileInfoType> = ({
                                                     profile,
                                                     status,
                                                     updateStatus
                                                 }
) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
            <div className={styles.titleProfileInfo}>Description</div>
            <div className={styles.profileContainer}>
                <div>
                    {profile.photos.small
                        ? <img className={styles.photo} src={profile.photos.small} alt=""/>
                        : <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtno7MdfABUmGeZB0Mz7oi6bklmEq9GhLRA&usqp=CAU'}
                            alt='user photo'/>
                    }
                    <div>{profile.fullName}</div>
                    <ProfileStatus
                        status={status}
                        updateStatus={updateStatus}
                    />
                </div>
                <div className={styles.userDescription}>
                    <div>{profile.aboutMe}</div>
                    <div>vk: {profile.contacts.vk}</div>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </>
    )
}

//types
type ProfileInfoType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
}