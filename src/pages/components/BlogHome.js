import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Container
} from '@mui/material';
import { Box } from '@mui/system';

import Home from './blog_home_pages/Home';
import Post from './blog_home_pages/Post';

import SideNavbar from './blog_home_components/SideNavbar';



const BlogHome = (props) => {



  const [Token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

  const { token, user } = Token;






  return (
    <>
      <Box sx={{ margin: '1vh' }}>
        <Card

          sx={{
            textAlign: 'center',

          }}>

          <CardContent>
            <Typography variant='h3'>'Blog' Post API</Typography>

          </CardContent>
        </Card>


        <Routes>
          <Route path='/' element={
            <>
              <Grid container
                direction={{ xs: 'column-reverse', md: 'row' }}>

                <Grid item xs={12} md={9}>
                  <Home token={token} user={user} />
                </Grid>
                <Grid item xs='auto' md={3} sx={{ mt: '1vh', ml: {xs:'10%', md:'0'}, mr: {xs:'10%', md:'0'} }} >
                  <SideNavbar user={user} backBtn={false} />
                </Grid>
              </Grid>
            </>
          } />

          <Route path='/post/:postId' element={
            <>
              <Grid container
                direction={{ xs: 'column-reverse', md: 'row' }}>

                <Grid item xs={12} md={9}>
                  <Post token={token} />
                </Grid>
                <Grid item xs='auto' md={3} sx={{ mt: '1vh', ml: {xs:'10%', md:'0'}, mr: {xs:'10%', md:'0'} }} >
                  <SideNavbar user={user} backBtn={true} />
                </Grid>
              </Grid>
            </>
          } />
        </Routes>



      </Box>
    </>
  )

}

export default BlogHome;
