import React from 'react'
import Menu from './menu'
import SignOut from './auth/signout'
import {FiUploadCloud} from 'react-icons/fi'
import "./style.css"
const Sidebar = () => {
  return (
    < >
        <div className='sidebar'>
          <div className='profile-info'>
              <div className='profile-picture'> 
                <picture><img className='p-photo' src='./asset/images/profile/profile.jpeg' alt='profile'/></picture>
                <div className="profile-overlay">
                  <div className='upload-icon'><FiUploadCloud/></div>
                </div>
                
              </div>
              <div className='user-des'>
                <p>Rakib Hasan</p>
              </div>
          </div> 
          <div className='menu-bar'>
            <Menu/>
          </div>
          <div className='log-section'>
            <SignOut/>
          </div> 
        </div>
    </>
  )
}

export default Sidebar
