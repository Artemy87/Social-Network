import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "./ProfileContainer";

export const Profile: FC<ProfilePropsType> = ({
                                                  profile,
                                                  status,
                                                  updateStatus
                                              }
) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
            />
            <MyPostContainer/>
        </div>
    )
}

//types
type ProfilePropsType = {
    profile: ProfileUserType | null
    updateStatus: (status: string) => void
    status: string
}
