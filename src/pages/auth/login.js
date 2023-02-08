import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import "./auth.css";
import { useFormik } from 'formik';  
import { ToastContainer, toast } from 'react-toastify';
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from 'react-router-dom';
import { LoginValidation } from './validation/loginValidation';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => 
{ 
  const auth = getAuth();
  const [loading,setLoading] = useState(false);

  const initialValue = { 
    email:"",
    password:"",  
  };
  
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: LoginValidation,
    onSubmit: ()=> { 
        signInWithEmailAndPassword(auth, formik.values.email, formik.values.password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('alright');
            console.log(user);
            // ...
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode+''+errorMessage);
          });
        

        console.log('loged in');
    }
  });  
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
            <Grid item xs={6}>
              <div>
                <picture>
                  <img className='reg-img' src='./asset/images/login.png' alt='Login photo' />
                </picture>
              </div>
            </Grid>
            <Grid  item xs={6}>
                  <div >
                    <div>
                      <h3 className='register-title'>Login to your account!</h3>
                    </div>  
                    <div className='register-form'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='input-box'>
                              <TextField value={formik.values.email} onChange={formik.handleChange}  name='email' className='custom-input' id="outlined-basic" type="email" label="Youraddres@email.com" variant="outlined" />
                              {formik.touched.email && formik.errors.email ? (<p className='error'>{formik.errors.email}</p>) : null}
                            </div>
                            <div className='password-box input-box'>
                                <TextField value={formik.values.password} onChange={formik.handleChange} name='password' className='custom-input' id="outlined-basic" type={passType}  label="Enter your password" variant="outlined" />
                                <div  className='eye' onClick={handlePassType}>
                                  {passType ==='password' ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}  
                                </div>
                                {formik.touched.password && formik.errors.password ? (<p className='error'>{formik.errors.password}</p>) : null}
                            </div>
                            {
                              loading?(
                                <Button  className='reg-btn center-load' type='submit' variant='contained' disabled> <PropagateLoader color="#fff" speedMultiplier="0.90" /> </Button>
                                ):(
                                  <Button className='reg-btn' type='submit' variant='contained' > Login to Continue </Button>    
                              )
                            }
                        </form>
                        <div>
                            <p className='auth-msg'> Don't  have an account ? <Link to='/register'>  Sign Up </Link></p>
                        </div>
                    </div>
                  </div>
            </Grid> 
         </Grid>
      </Container>
    </div>
  )
}

export default Login
