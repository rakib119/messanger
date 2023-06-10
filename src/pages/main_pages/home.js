import React from 'react' 
import './style.css'
import Grid from '@mui/material/Grid';
import GroupList from '../../component/home/grouplist';
import FriendRequest from '../../component/home/friendrequest';
import FriendList from '../../component/home/friendlist';
import MyGroups from '../../component/home/mygroups';
import UserList from '../../component/home/userlist';
import BlockList from '../../component/home/blocklist';

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
            <div className="comp-wrapper">
              <FriendList/>
            </div>
            <div className="comp-wrapper">
              <MyGroups/> 
            </div>
        </Grid>
        <Grid item xs={4}>
            <div className="comp-wrapper">
              <UserList/>
            </div>
            <div className="comp-wrapper">
              <BlockList/> 
            </div>
        </Grid>
      </Grid>
    </div>
    
  )
}

export default Home
