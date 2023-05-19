import React from 'react'
import {FiUploadCloud} from 'react-icons/fi'

const ProfileInfo = () => {
    const handleUpload = ()=>{
        console.log('upload picture');
    }
  return (
    <>
        <div className='profile-picture' onClick={handleUpload}> 
            <picture><img className='p-photo' src='./asset/images/profile/profile.jpeg' alt='profile'/></picture>
            <div className="profile-overlay">
                <div className='upload-icon'><FiUploadCloud/></div>
            </div>
        </div>
        <div className='user-des'>
            <p>Rakib Hasan</p>
        </div>
    </>
  )
}

export default ProfileInfo
