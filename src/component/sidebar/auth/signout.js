import React from 'react'
import {GoSignOut} from 'react-icons/go'
import { getAuth, signOut} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../features/slice/UserSlice';
import { useNavigate } from 'react-router-dom';
const Signout = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignout = ()=>{
        signOut(auth).then(()=>{
            localStorage.removeItem('user');
            dispatch(loginUser(null));
            navigate('/login');
        });
        
    }
  return (
    <>
        <div className='log-out' onClick={handleSignout}>
                <GoSignOut/>
        </div>
    </>
  )
}

export default Signout;
