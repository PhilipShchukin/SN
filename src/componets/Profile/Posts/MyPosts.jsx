import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator}from "../../../redux/profile-reducer";

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  let newPostElements = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElements.current.value;

    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);

  }
  return (
    <div className={s.postBlock}>
      <h3>My postst</h3>
      <div>
        <div><textarea onChange={onPostChange} ref={newPostElements} value={props.NewPostText} /></div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;