import React from 'react';
import Header from './Header';
import { connectAdvanced } from 'react-redux';
import {logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connectAdvanced(mapStateToProps, {logout })(HeaderContainer);