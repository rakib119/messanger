import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import "./auth.css";
import { useFormik } from 'formik';
import { RegValidation } from '../../validation/RegisterValidation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import PropagateLoader from "react-spinners/PropagateLoader";


const Register = () => 
{
  const auth = getAuth();
  const [loading,setLoading] = useState(false);

  const initialValue = {
    full_name:"",
    email:"",
    password:"", 
    confirm_password:"",
  };
  
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: RegValidation,
    onSubmit: ()=> { 
      setLoading(true)
      createUserWithEmailAndPassword(auth,formik.values.email, formik.values.password)
      .then(()=>{
        formik.resetForm();
        setLoading(false)
      })
      .catch((error)=>{
        if(error.code.includes('auth/email-already-in-use')){
          toast('Email already exist', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
          setLoading(false);
        }
      }) 
    }
  }); 
  console.log(formik);
  const [passType,setPassType] = useState('password');
  const handlePassType = ()=>{
      if(passType === 'password'){
          setPassType('text');
      }else{
          setPassType('password');
      }
  }
  return (
    <div className='mainbox'>
      <Container fixed>
      <ToastContainer/>
         <Grid className='box' container spacing="2">
            <Grid  item xs={6}>
                  <div >
                    <div>
                      <h3 className='register-title'>Get started with easily register </h3>
                      <span className='register-quote'>Free register and you can enjoy it </span> 
                    </div>  
                    <div className='register-form'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='input-box'>
                              <TextField value={formik.values.full_name} onChange={formik.handleChange}  name='full_name' className='custom-input' id="outlined-basic" type="text" label="Full Name" variant="outlined" />
                              {formik.touched.full_name && formik.errors.full_name ? (<p className='error'>{formik.errors.full_name}</p>) : null}
                            </div>
                            <div className='input-box'>
                              <TextField value={formik.values.email} onChange={formik.handleChange}  name='email' className='custom-input' id="outlined-basic" type="email" label="Email Address" variant="outlined" />
                              {formik.touched.email && formik.errors.email ? (<p className='error'>{formik.errors.email}</p>) : null}
                            </div>
                            <div className='password-box input-box'>
                                <TextField value={formik.values.password} onChange={formik.handleChange} name='password' className='custom-input' id="outlined-basic" type={passType}  label="Password" variant="outlined" />
                                <div  className='eye' onClick={handlePassType}>
                                  {passType ==='password' ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}  
                                </div>
                                {formik.touched.password && formik.errors.password ? (<p className='error'>{formik.errors.password}</p>) : null}
                            </div>
                            <div className='input-box'>
                              <TextField value={formik.values.confirm_password} onChange={formik.handleChange}  name='confirm_password' className='custom-input' id="outlined-basic" type='password'  label="Confirm Password" variant="outlined" />
                              {formik.touched.confirm_password && formik.errors.confirm_password ? (<p className='error'>{formik.errors.confirm_password}</p>) : null}
                            </div>
                            {
                              loading?(
                                <Button  className='reg-btn center-load' type='submit' variant='contained' disabled> <PropagateLoader color="#fff" speedMultiplier="0.90" /> </Button>
                                ):(
                                  <Button className='reg-btn' type='submit' variant='contained' > Sign Up </Button>    
                              )
                            }
                        </form>
                        <div>
                            <p className='auth-msg'> Already  have an account ?  <a href='sign-in'> Sign In </a>  </p>
                        </div>
                    </div>
                  </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <picture>
                  <img className='reg-img' src='./asset/images/register.png' alt='register photo' />
                </picture>
              </div>
            </Grid>
         </Grid>
      </Container>
    </div>
  )
}

export default Register
