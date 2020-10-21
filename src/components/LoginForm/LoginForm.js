import React from 'react';
import { Input, Button, Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Block from '../Block/Block';
import { Link } from 'react-router-dom';
import formikEnhancer from '../Hoc-helpers/withFormik';


const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
      } = props;

    return (
        <section className = "auth">
            <h2 className = 'auth__title'>Войти в аккаунт</h2>
            <p className = 'auth__subtitle'>Пожалуйста, войдите в свой аккаунт</p>
            <Block>
            <Form
                name="normal_login"
                >
                <Form.Item
                    hasFeedback
                    validateStatus = {!touched.userName ? '' : errors.userName ? 'error' : 'success'}
                >
                    <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите логин"
                    size= 'large'
                    name = 'userName'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.userName}
                    />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    validateStatus = {!touched.password ? '' : errors.password ? 'error' : 'success'}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Введите пароль"
                    size= 'large'
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    name = 'password'
                    />
                </Form.Item>
                <Form.Item>
                    <Button size = 'large' type="primary" htmlType="submit" className="login-form-button">
                        Войти 
                    </Button>                   
                </Form.Item>
                <span><Link to = '/register' className = 'auth__reg'>Зарегистрироваться</Link></span>
                </Form>
            </Block>
        </section>
    );
}

export default formikEnhancer(LoginForm);
