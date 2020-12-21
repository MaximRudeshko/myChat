import React from 'react';
import { Input, Button, Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Block from '../Block/Block';
import { Link } from 'react-router-dom';
import formikEnhancer from '../Hoc-helpers/withFormik';
import { useDispatch } from 'react-redux';
import { auth, login } from '../../redux/actions/user';


const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        isValid
      } = props;

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(auth())
    }, [])

    const handleSubmit = () => {
        dispatch(login(values))
        console.log(values)
    }

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
                    validateStatus = {!touched.email ? '' : errors.email ? 'error' : 'success'}
                >
                    <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите логин"
                    size= 'large'
                    name = 'email'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.email}
                    />
                </Form.Item>
                <Form.Item
                    hasFeedback
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Введите пароль"
                    size= 'large'
                    name = 'password'
                    value = {values.password}
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick = {handleSubmit} size = 'large' type="primary" htmlType="submit" className="login-form-button">
                    {/* <Link to = '/home'>Войти в аккаунт</Link> */}
                    Войти в аккаунт
                    </Button>                   
                </Form.Item>
                <span><Link to = '/register' className = 'auth__reg'>Зарегистрироваться</Link></span>
                </Form>
            </Block>
        </section>
    );
}

export default formikEnhancer(LoginForm);
