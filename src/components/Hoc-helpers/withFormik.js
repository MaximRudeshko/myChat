import * as Yup from 'yup';
import { withFormik } from 'formik';
import { createUser } from '../../redux/actions/user';


const formikEnhancer = withFormik({
    mapPropsToValues: props => ({ 
        email: '',
        userName: '',
        password: '',
        confirmPassword: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        userName: Yup.string()
            .trim()
            .matches(/^[A-Za-z0-9_-]*$/ , 'Is not in correct format')
            .required(),
        password: Yup.string()
            .trim()
            .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/ , 'Is not in correct format')
            .required(),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')])
            .required()
    }),
    handleSubmit: (values, { setSubmitting }) => {
        
    },
    handleChange: (value) => {
        console.log(value)
    },
    displayName: 'RegisterForm'
});

export default formikEnhancer