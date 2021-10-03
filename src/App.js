import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import store, { addPost } from './redux/store';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className ='app-wrapper'>
        <Header />
        <Navbar />
        {/*<Profile />*/}
        <div className ='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
          <Route path='/profile' render={() => <Profile store={props.store} />} />
        </div>
      </div>;
    </BrowserRouter>)
}

export default App;