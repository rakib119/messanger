import React from 'react'
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/sidebar';
const Layout = () => {
  return (
    <>
        <Grid container>
            <Grid item xs='2'>
                <Sidebar/>
            </Grid>
            <Grid item xs='10'>
                <Outlet/>
            </Grid>  
        </Grid>
    </>
  )
}

export default Layout
