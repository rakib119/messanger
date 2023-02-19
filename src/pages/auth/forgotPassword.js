import React, { useState } from 'react';
import { Button, Container, Grid, TextField} from '@mui/material'; 
import "./auth.css";  
import PropagateLoader from "react-spinners/PropagateLoader"; 



const ForgotPassword = () => 
{ 
 const [loading,setLoading] = useState(false);  
  
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
                    <form >
                        <div className='input-box'>
                            <TextField  name='email' className='custom-input' id="outlined-basic" type="email" label="Email Address" placeholder='Enter Email Address' variant="outlined" />
                        </div> 
                        {
                            loading?(
                            <Button  className='reg-btn center-load' type='submit' variant='contained' disabled> <PropagateLoader color="#fff" speedMultiplier="0.90" /> </Button>
                            ):(
                                <Button className='reg-btn' type='submit' variant='contained' > Login to Continue </Button>    
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
