import * as Yup from 'yup';
import { withFormik } from 'formik';


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
            .matches(/^[A-Za-z0-9_-]*$/ , 'Is not in correct format')
            .required(),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')])
            .required()
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        }, 1000);
    },
    displayName: 'RegisterForm', // helps with React DevTools
});

export default formikEnhancer