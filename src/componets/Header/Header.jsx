import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://secureservercdn.net/50.62.198.70/4ff.7ae.myftpupload.com/wp-content/uploads/2020/10/usa-herald.png"/>
        <div className = {s.loginBlock}>
            {props.isAuth ? props.login  : <NavLink to = {'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;  