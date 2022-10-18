
import React, { useState } from 'react';

import BlogLogin from './components/BlogLogin';
import BlogHome from './components/BlogHome';


import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';





const BlogPage = () => {

  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));



  return (
    <>
    <Box
      display="flex"
      flexDirection="Column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      
    

      {token === null ?
        (
          <BlogLogin />
        )

        :

        (
          <BlogHome values={token}/>
        )}


    </Box>
    </>
  );


}

export default BlogPage;