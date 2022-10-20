import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';

import Home from './blog_home_pages/Home'; 



const BlogHome = () => {



  const [Token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

  const {token, user } = Token;
 


  



  return (
<>
<Box sx={{margin: '1vh'}}>
        <Card

          sx={{
            textAlign: 'center',
            
          }}>
            
          <CardContent>
            <Typography variant='h3'>'Blog' Post API</Typography>
            
          </CardContent>
        </Card>
      </Box>
    <Routes>
    <Route path='/' element={<>
      
          <Home token={token} /> </>} />
    </Routes>

    </>
  )
  
}

export default BlogHome;
