import * as Yup from 'yup';

export const LoginValidation = Yup.object({
    email: Yup.string().email().required('Email field is required'), 
    password: Yup.string().min(6,'Must be 6 characters or more').required('Password field is required'), 
  })