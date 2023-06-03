import React from 'react' 
import './style.css'
import Grid from '@mui/material/Grid';
import GroupList from '../../component/home/grouplist';
import FriendRequest from '../../component/home/friendrequest';

const Home = () => {
  return (
    // className='bg-green' style={{display:"flex", justifyContent:'center',gap:'30px',marginTop:'40px' }}
    <div > 
      <Grid container spacing={2} className='home-page'>
        <Grid item xs={4}>
            <div className="comp-wrapper">
              <GroupList/>
            </div>
            <div className="comp-wrapper">
              <FriendRequest/> 
            </div>
        </Grid>
        <Grid item xs={4}>
            2
        </Grid>
        <Grid item xs={4}>
            3
        </Grid>
      </Grid>
    </div>
    
  )
}

export default Home
