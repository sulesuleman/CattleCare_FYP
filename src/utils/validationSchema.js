import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email("Wrong email format")
        .min(3, "Minimum 3 symbols")
        .max(50, "Maximum 50 symbols")
        .required('Email is a required field'),
    name: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .required('Name is a required field'),
    password: Yup.string()
        .min(8, "Minimum 8 symbols")
        .required('Password is a required field'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm password must match with new password")
        .required("This is a required field"),
    phoneNumber: Yup.string()
        .min(11, 'Minimum 11 symbols')
        .required('Phone number is a required field'),
    address: Yup.string()
        .min(5, 'Minimum 5 symbols')
        .max(300, 'Maximum 300 symbols')
        .required('Address is a required field')
});