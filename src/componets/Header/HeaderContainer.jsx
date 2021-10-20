import React from 'react';
import Header from './Header';
import { connectAdvanced } from 'react-redux';
import {getAuthUserData,logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connectAdvanced(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);