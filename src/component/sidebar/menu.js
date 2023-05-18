import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineSetting} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <div className='menu-items'>
        <NavLink className="item" to='/'> 
              <AiOutlineHome/> 
        </NavLink> 
        <div className="item"> 
              <BsFillChatDotsFill/> 
        </div>
        <div className="item"> 
              <IoMdNotificationsOutline/> 
        </div>
        <div className="item"> 
              <AiOutlineSetting/> 
        </div>
      </div>
    </>
  )
}

export default Menu
