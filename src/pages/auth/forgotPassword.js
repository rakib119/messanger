import React, { useState } from 'react';
import { Alert, Button, Container, Grid, TextField} from '@mui/material'; 
import "./auth.css";  
import { useFormik } from 'formik';  
import PropagateLoader from "react-spinners/PropagateLoader"; 
import { ForgetValidation } from './validation/forgetValidation';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';



const ForgotPassword = () => 
{ 
  const auth = getAuth();
  const [errorMsg, setErrorMsg] = useState('');
  const [SuccessMsg, setSuccessMsg] = useState('');
  const [loading,setLoading] = useState(false);  
  const initialValue = { 
  email:"",
  };
  /* const handleChange = ()=>{
   (); 
    
  } */
  const formik = useFormik({ 
    initialValues: initialValue,
    validationSchema: ForgetValidation,
    onSubmit: ()=> { 
      setLoading(true);
      sendPasswordResetEmail(auth, formik.values.email)
      .then(()=>{
        setSuccessMsg('Reset Link sent successfully to your email.'); 
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        if(error.code.includes('auth/user-not-found')){
          setErrorMsg('Please Enter a valid Email Address');
        }
        setLoading(false);
      }
      );  

    }
  });  
  return (
    <div className='mainbox'>
      <Container fixed>
         <Grid className='box' container spacing="2">
            <Grid item xs={6}>
              <div>
                <picture>
                  <img className='reg-img' src='./asset/images/Forgot password.png' alt='Login' />
                </picture>
              </div> 
            </Grid>
            <Grid  item xs={6}>
                <div > 
                    <div style={{marginBottom:'70px'}}>
                        <h3 className='register-title'>Reset Your Password </h3>
                        <span className='register-quote'>	Please enter your email address to search for reset your password. </span> 
                    </div> 
                    {
                       SuccessMsg?
                        (
                          <div className='my-20'>
                             
                            <Alert severity="success">{SuccessMsg}</Alert>  
                          </div>
                        )
                        : ''
                      }
                    <form onSubmit={ formik.handleSubmit } >
                        <div className='input-box'>
                          <TextField value={formik.values.email} onChange={ formik.handleChange} onKeyUp ={()=>setErrorMsg('')} name='email' className='custom-input' id="outlined-basic" type="email" placeholder="Youraddres@email.com" label='Email Address' variant="outlined" />
                          {formik.touched.email && formik.errors.email ? (<p className='error'>{formik.errors.email}</p>) :(errorMsg? (<p className='error'>{errorMsg}</p>) : null)  } 
                           
                        </div> 
                        {
                            loading?(
                            <Button  className='reg-btn center-load' type='submit' variant='contained' disabled> <PropagateLoader color="#fff" speedMultiplier="0.90" /> </Button>
                            ):(
                                <Button className='reg-btn' type='submit' variant='contained' > Reset </Button>    
                            )
                        }
                    </form>  
                </div> 
            </Grid> 
         </Grid>
      </Container>
    </div>
  )
}

export default ForgotPassword
