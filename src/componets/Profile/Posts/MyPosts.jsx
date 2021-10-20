import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form'
import { maxLenghtCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLenght10 = maxLenghtCreator() 

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  let newPostElements = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.NewPostForm)
  } 
  return (
    <div className={s.postBlock}>
      <h3>My postst</h3>
        <AddNewPostFormRedux onSubmit = {onAddPost} />
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

const AddNewPostForm  = (props) =>{
  return(
    <form>
        <Field onSubmit = {props.handleSubmit} component= {Textarea} validate = {[required, maxLenght10]} />
      <div>
        <Field name ="newPostText"/>
      </div>
      <div><button>Add post</button></div>
  </form>
  )
}
 let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;