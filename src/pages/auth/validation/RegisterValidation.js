import * as Yup from 'yup';

export const RegValidation = Yup.object({

    full_name: Yup.string().min(3, 'Must be 3 characters or more').max(25, 'Must be 25 characters or less').required('Full name field is required'), 
    email: Yup.string().email().required('Email field is required'), 
    password: Yup.string().min(6,'Must be 6 characters or more').required('Password field is required'), 
    confirm_password: Yup.string().min(6,'Must be 6 characters or more').oneOf([Yup.ref('password'),null],'Password not matched').required('Confirm Password field is required'), 
  })