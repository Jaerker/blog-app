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

const SideNavbar = (props) => {






  const btnClick = (e) => {
    const path = e.target.accessKey;
    if (path === 'logout') {
      window.localStorage.removeItem('JAERKER_BLOG_APP_PORTFOLIO');
      window.location.assign('/blog');
      return 0;
    }
  }




  return (
    <>
      <Card>
        <CardContent>
          <Typography align='center'><strong>Welcome {props.user.fName}!</strong></Typography>
          {props.backBtn && (
            <Button sx={{ mt: '1vh' }} onClick={() => { window.history.back() }} variant='contained' color='warning' fullWidth>Go back</Button>
          )}
          <Button disabled={props.profileBtn} sx={{ mt: '1vh' }} component={Link} to={`/blog/user/${props.user._id}`} variant='contained' fullWidth>Profile</Button>
          <Button disabled={props.newPostBtn} sx={{ mt: '1vh' }} component={Link} to='/blog/post/newpost' variant='contained' fullWidth>Create new post</Button>
          <Button sx={{ mt: '1vh' }} accessKey='logout' onClick={btnClick} variant='outlined' color='error' fullWidth>Log out</Button>
        </CardContent>
      </Card>
    </>
  )

}

export default SideNavbar;