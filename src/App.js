import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './componets/Header/HeaderContainer';
import Navbar from './componets/Navbar/Navbar';
import ProfileContainer from './componets/Profile/ProfileContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './componets/Users/UsersContainer';
import LoginPage from './componets/Login/Login'
import { connect } from 'react-redux';
import { initalizeApp } from '../../redux/app-reducer'
import { compose } from 'redux';
import Preloader from './componets/Common/Preloader/Preloader';
import { withRouter } from 'react-router';

class App extends Component {
  componentDidMount() {
    this.props.initalizeApp();
  }
  render() {
    if (!this.props.initalized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </div>;
      </BrowserRouter>)
  }
}

const mapStateToProps = (state) => ({
  initalized: state.app.initalized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initalizeApp }))(App)