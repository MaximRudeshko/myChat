import React from 'react';
import {Route} from 'react-router-dom'
import LoginForm from '../../LoginForm/LoginForm';
import RegisterForm from '../../RegisterForm/RegisterForm'
import './auth.scss'





const Auth = () => {
    return (
        <div className = 'auth__wrap'>
            <Route path = '/' component={LoginForm} exact/>
            <Route path = '/register' component={RegisterForm}/>
        </div>
    );
}

export default Auth;


