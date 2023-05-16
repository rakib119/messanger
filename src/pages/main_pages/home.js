import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    // className='bg-green' style={{display:"flex", justifyContent:'center',gap:'30px',marginTop:'40px' }}
    <div >
       <p><Link to='/register'>  Sign Up </Link></p>
       <p><Link to='/login'>  Sign In </Link></p>
    </div>
    
  )
}

export default Home
