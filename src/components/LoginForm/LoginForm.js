import React from 'react';
import { Input, Button, Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Block from '../Block/Block';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <section className = "auth">
            <h2 className = 'auth__title'>Войти в аккаунт</h2>
            <p className = 'auth__subtitle'>Пожалуйста, войдите в свой аккаунт</p>
            <Block>
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите логин"
                    size= 'large'
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
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

export default LoginForm;
