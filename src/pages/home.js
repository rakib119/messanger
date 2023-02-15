import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"flex", justifyContent:'center',gap:'30px',marginTop:'40px' }}>
       <p><Link to='/register'>  Sign Up </Link></p>
       <p><Link to='/login'>  Sign In </Link></p>
    </div>
    
  )
}

export default Home
