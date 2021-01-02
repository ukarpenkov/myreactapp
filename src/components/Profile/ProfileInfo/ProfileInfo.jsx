import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>
          <p>{profile.aboutMe}</p>
        </div>
        <div>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
        <div>
          <p>{profile.fullName}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;