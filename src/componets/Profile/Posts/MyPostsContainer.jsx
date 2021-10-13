import React from 'react'; 
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator}from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';

const mapStateToProps = (state)=>{  
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    updateNewPostText: (text) =>{
      let action = updateNewPostTextActionCreator(text);
      dispatch(action)},
      addPost:()=>{
        dispatch(addPostActionCreator());
    }
  }
}

const  MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;




//*const MyPostsContainer = (props) => { 
  //console.log(props.store.getState())
  // let state = props.store.dispatch(addPostActionCreator())
  //let state = props.store.getState();
  //let addPost = () => {
    //props.store.dispatch(addPostActionCreator());
  //}
  //let onPostChange = (text) => {
    //let action = updateNewPostTextActionCreator(text);
    //props.store.dispatch(action)
  //}
  //return (
 //   <MyPosts updateNewPostText={onPostChange} addPost={addPost}
    //  posts={state.profileReducer.posts}
 //     newPostText={state.profileReducer.newPostText} />
//  )
//}
