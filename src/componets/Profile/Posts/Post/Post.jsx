import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className = {s.item}>
      <img src='https://i.pinimg.com/736x/c2/20/49/c22049b26af760183b487453f92a99aa.jpg'/>{props.message}</div>
  )
}


export default Post;