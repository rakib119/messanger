import * as Yup from 'yup';

export const ForgetValidation = Yup.object({
    email: Yup.string().email().required('Email field is required'), 
  })