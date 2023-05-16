import React from 'react'
import Menu from './menu'
import "./style.css"
const Sidebar = () => {
  return (
    < >
        <div className='sidebar'>
            <div className='profile-picture'> 
              <picture><img className='p-photo' src='./asset/images/profile/profile.jpeg' alt='profile'/></picture>
            </div>
            <div className='menu_bar'>
              <Menu/>
            </div>
            <div className='logout'>logout</div>

        </div>
    </>
  )
}

export default Sidebar
