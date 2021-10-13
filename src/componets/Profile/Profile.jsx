import React from 'react';
import MyPosts from './Posts/MyPosts';
import MyPostsContainer from './Posts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return <div>
    <ProfileInfo profile={props.profile}/>
    <MyPostsContainer store={props.store}/>
  </div>
}

export default Profile;