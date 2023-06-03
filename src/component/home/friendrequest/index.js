import React from 'react'
import './style.css'
// import {GoSearch} from 'react-icons/go'
import Button from '@mui/material/Button';
const friendRequest = () => {
  return (
    <div className='single-item group-list'>
      <div className="list-header">
        <h2 className='title'>Friend Request</h2>
        {/* <div className="search-box">
          <GoSearch/>
          <input type="text" className='search-input' placeholder='search here...'/>
        </div> */}
        <div className='list-body'> 
            <div className="body-item-wrapper">
                <div className="item-img">
                  <picture>
                    <img  src="./asset/profile_pictures/avatar.png" alt="img" /> 
                  </picture>
                </div>
                <div className="item-dtls">
                   <h4 className='item-title'>Md. Rakib Hasan</h4>
                    <p className='item-s-title'>Software Engineer </p>
                </div>
                <div className="item-btns">
                  <Button variant="contained">Accept</Button> 
                </div>
            </div>
            <div className="body-item-wrapper">
                <div className="item-img">
                  <picture>
                    <img  src="./asset/profile_pictures/avatar.png" alt="img" /> 
                  </picture>
                </div>
                <div className="item-dtls">
                   <h4 className='item-title'>Md. Rakib Hasan</h4>
                    <p className='item-s-title'>Software Engineer </p>
                </div>
                <div className="item-btns">
                  <Button variant="contained">Accept</Button>
                </div>
            </div>
            <div className="body-item-wrapper">
                <div className="item-img">
                  <picture>
                    <img  src="./asset/profile_pictures/avatar.png" alt="img" /> 
                  </picture>
                </div>
                <div className="item-dtls">
                   <h4 className='item-title'>Md. Rakib Hasan</h4>
                    <p className='item-s-title'>Software Engineer </p>
                </div>
                <div className="item-btns">
                  <Button variant="contained">Accept</Button>
                </div>
            </div>
            <div className="body-item-wrapper">
                <div className="item-img">
                  <picture>
                    <img  src="./asset/profile_pictures/avatar.png" alt="img" /> 
                  </picture>
                </div>
                <div className="item-dtls">
                   <h4 className='item-title'>Md. Rakib Hasan</h4>
                    <p className='item-s-title'>Software Engineer </p>
                </div>
                <div className="item-btns">
                  <Button variant="contained">Accept</Button>
                </div>
            </div>
            <div className="body-item-wrapper">
                <div className="item-img">
                  <picture>
                    <img  src="./asset/profile_pictures/avatar.png" alt="img" /> 
                  </picture>
                </div>
                <div className="item-dtls">
                   <h4 className='item-title'>Md. Rakib Hasan</h4>
                    <p className='item-s-title'>Software Engineer </p>
                </div>
                <div className="item-btns">
                  <Button variant="contained">Accept</Button>
                </div>
            </div>
            <div className="body-item-wrapper">
                <div className="item-img">
                  <picture>
                    <img  src="./asset/profile_pictures/avatar.png" alt="img" /> 
                  </picture>
                </div>
                <div className="item-dtls">
                   <h4 className='item-title'>Md. Rakib Hasan</h4>
                    <p className='item-s-title'>Software Engineer </p>
                </div>
                <div className="item-btns">
                  <Button variant="contained">Accept</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default friendRequest
