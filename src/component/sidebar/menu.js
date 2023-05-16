import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineSetting} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <div className='menu-item'>
        <NavLink className='menu-icon' to='/'>
          <AiOutlineHome/>
        </NavLink>
        <div className='menu-icon'>
          <BsFillChatDotsFill/>
        </div> 
        <div className='menu-icon'>
          <IoMdNotificationsOutline/>
        </div> 
        <div className='menu-icon'> 
          <AiOutlineSetting/>
        </div> 
      </div>
    </>
  )
}

export default Menu
