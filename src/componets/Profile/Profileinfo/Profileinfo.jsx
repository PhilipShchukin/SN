import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfilStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div className={s.item}><img src='https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kity-28.jpg' /></div>
    <div>
      <img src={props.profile.photos.large} />
      <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
    </div>
  </div>
}


export default ProfileInfo;