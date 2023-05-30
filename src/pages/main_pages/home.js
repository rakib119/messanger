import React from 'react' 
import './home.css'
import Grid from '@mui/material/Grid';
import GroupList from '../../component/home/grouplist';

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
              Friend list
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
