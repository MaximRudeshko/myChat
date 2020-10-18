import React from 'react';
import { Input, Button, Form} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import Block from '../Block/Block'

const RegisterForm = () => {
    return (
        <section className = "auth">
            <h2 className = 'auth__title'>Регистрация</h2>
            <p className = 'auth__subtitle'>Для входа в чат, вам нужно зарегистрироваться</p>
            <Block>
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                >
                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email',
                    },
                    ]}
                >
                    <Input 
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Введите вашу почту"
                    size= 'large'
                    />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your login!',
                    },
                    ]}
                >
                    <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Введите ваш логин"
                    size= 'large'
                    />
                </Form.Item>
                <Form.Item
                    name="password-repit"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Введите пароль"
                    size= 'large'
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Повторите пароль"
                    size= 'large'
                    />
                </Form.Item>
                <Form.Item>
                    <Button size = 'large' type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>                   
                </Form.Item>
                    <span><Link to = '/' className = 'auth__reg'>Войти в учетную запись</Link></span>
                </Form>
            </Block>
            
        </section>
    );
}

export default RegisterForm;

