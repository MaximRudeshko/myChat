import React, { useState } from 'react';
import { Input, Button, Form} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import Block from '../Block/Block'
import { SuccessBlock } from '../SuccesBlock';
import formikEnhancer from '../Hoc-helpers/withFormik';
import { useDispatch } from 'react-redux';
import { createUser, registration } from '../../redux/actions/user';

const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        isValid,
      } = props;     

    const [success, setSuccess] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        registration(values)    
    }

    return (
        <section className = "auth">
            <h2 className = 'auth__title'>Регистрация</h2>
            <p className = 'auth__subtitle'>Для входа в чат, вам нужно зарегистрироваться</p>
            <Block>
            {!success ?
                <Form
                name="normal_login"
                >
                <Form.Item
                    validateStatus = {!touched.email ? "" :  errors.email ? 'error' : 'success'}
                    hasFeedback
                >
                    <Input 
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Введите вашу почту"
                    size= 'large' 
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    name="email" 
                    value = {values.email}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus = {!touched.userName ? "" :  errors.userName ? 'error' : 'success'}
                    hasFeedback
                    rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите ваш логин"
                    size= 'large'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    name="userName"
                    />
                </Form.Item>
                <Form.Item
                    validateStatus = {!touched.password ? '' : errors.password ? 'error' : 'success'}
                    hasFeedback
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Введите пароль"
                    size= 'large'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    name = 'password'
                    />
                </Form.Item>
                <Form.Item
                    validateStatus = {!touched.confirmPassword ? '' : errors.confirmPassword ? 'error' : 'success'}
                    hasFeedback
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Повторите пароль"
                    size= 'large'
                    name = 'confirmPassword'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick = {handleSubmit} disabled={!(isValid && dirty)} size = 'large' type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>                   
                </Form.Item>
                    <span><Link to = '/' className = 'auth__reg'>Войти в учетную запись</Link></span>
                </Form>: <SuccessBlock/>
            }
            </Block>
        </section>
    );
}

export default formikEnhancer(RegisterForm);

