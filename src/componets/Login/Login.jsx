import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {Field, reduxForm} from 'redux-form'
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../Common/FormsControls/FormsControls';
import style from "./..//Common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"}
                validate={required}
                component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type = {"password"}
                validate={required}
                component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} />
            </div>
            {props.error && <div className = {style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberME)
    }
    if (props.isAuth){
        return <Redirect to = {"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit= {onSubmit} />
    </div>
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {Login})(login);