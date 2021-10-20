import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import HeaderContainer from './componets/Header/HeaderContainer';
import Navbar from './componets/Navbar/Navbar';
import ProfileContainer from './componets/Profile/ProfileContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import store, { addPost } from './redux/store';
import UsersContainer from './componets/Users/UsersContainer';
import LoginPage from './componets/Login/Login'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className ='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className ='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer/> } />
          <Route path='/login' render={() => <LoginPage/> } />
          
        </div>
      </div>;
    </BrowserRouter>)
}

export default App;