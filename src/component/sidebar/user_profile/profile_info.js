import React, { useState } from 'react'
import {FiUploadCloud} from 'react-icons/fi'
import UploadPhotoPopup from './upload_profile_picture';

const ProfileInfo = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true); 
  return (
    <>
        <div className='profile-picture' onClick={handleOpen}> 
            <picture><img className='p-photo' src='./asset/images/profile/profile.jpeg' alt='profile'/></picture>
            <div className="profile-overlay">
                <div className='upload-icon'><FiUploadCloud/></div>
            </div>
        </div>
        <div className='user-des'>
            <p>Rakib Hasan</p>
        </div>
        <UploadPhotoPopup open={open} setOpen={setOpen}/>
    </>
  )
}

export default ProfileInfo
