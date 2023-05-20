import React, { useRef } from 'react';
import Box from '@mui/material/Box'; 
import './upload_profile_picture.css';
import Modal from '@mui/material/Modal';
import {BsImages} from 'react-icons/bs'
 

export default function UploadPhotoPopup({open,setOpen}) { 
  const handleClose = () => setOpen(false);
  const photoInput = useRef(null);
  console.log(photoInput);
  return (
    <div> 
      <Modal open={open} onClose={handleClose} >
        <Box className="modal">
          <input hidden type="file" ref={photoInput} accept='.jpg,.jpeg,.png'/>
          <div className="upload-box">
            <div className="upload-svg" onClick={()=>photoInput.current.click()}>
                <BsImages/>
                <span>Upload</span>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}