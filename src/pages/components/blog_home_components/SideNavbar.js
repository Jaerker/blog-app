import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Container
} from '@mui/material';

const SideNavbar = (props) =>{



    


    const btnClick = (e) => {
        const path = e.target.accessKey;
        if (path === 'logout') {
          window.localStorage.removeItem('JAERKER_BLOG_APP_PORTFOLIO');
          window.location.assign('/');
          return 0;
        }
        window.location.assign('/blog');
      }

      


    return (
        <>
        <Card>
              <CardContent>
                <Typography align='center'><strong>Welcome {props.user.fName}!</strong></Typography>
                {props.backBtn && (
                  <Button sx={{ mt: '1vh' }} component={Link} to='/blog' variant='contained' color='warning' fullWidth>Go back to bloghome</Button>
                )}
                <Button sx={{ mt: '1vh' }} variant='contained' fullWidth>Edit Profile</Button>
                <Button sx={{ mt: '1vh' }} variant='contained' fullWidth>Create new post</Button>
                <Button sx={{ mt: '1vh' }} accessKey='logout' onClick={btnClick} variant='outlined' color='error' fullWidth>Log out</Button>
              </CardContent>
            </Card>
        </>
    )

}

export default SideNavbar;