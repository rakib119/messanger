import React from 'react'
import Menu from './menu'
import SignOut from './auth/signout' 
import ProfileInfo from './user_profile/profile_info' 
import "./style.css"
const Sidebar = () => {
  return (
    < >
        <div className='sidebar'>
          <div className='profile-info'>
              <ProfileInfo/>
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
