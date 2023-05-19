import * as React from 'react';
import Box from '@mui/material/Box'; 
import './upload_profile_picture.css';
import Modal from '@mui/material/Modal';

 

export default function UploadPhotoPopup({open,setOpen}) { 
  const handleClose = () => setOpen(false);

  return (
    <div> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
           hhello
        </Box>
      </Modal>
    </div>
  );
}