import profilePic from '../static/img/croppedprofilepic.jpg';

import {
    Card,
    CardContent,
    Grid, Typography
} from '@mui/material';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Box } from '@mui/system';


const Home = () => {

    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

    return (
        <>
            <Typography gutterBottom variant='h1' align='center'>Welcome</Typography>
            <Card sx={{ mr: '10%', ml: '10%' }}>
                
                    <CardContent>
                    <Grid
                    container
                    spacing={2}
                    direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>



                            <Typography variant='h2' align='center' gutterBottom>My short story</Typography>
                            <Typography variant='body1' sx={{ mb: '1.5vh' }}>I grew up in a small town in Värmland, Sweden, called Sunne, with 4 siblings. I´ve been a bit crazy over computers ever since I completely locked down our first PC at around 8 years old when I was trying to be a hot shot hacker. A few years after that, I got the opportunity to learn a bit of coding in C++ by a good friend of mine and got hooked.</Typography>

                            <Typography variant='body1' sx={{ mb: '1.5vh' }}>Due to personal reasons, I have never been able to go to do any longer studies on programming, although some smaller ones in C#. Hopefully I can show off my skills more over on this CV, or at least show that if I get the time and trust, I would be a valuable asset for a company.</Typography>

                            <Typography variant='body1' gutterBottom>Right now I live in Sweden, been married since 2010 and I have 3 kids.</Typography>


                        </Grid>
                        <Grid item xs={12} md={6} align='center'>
                            <img src={profilePic} style={{ width: '20rem', borderRadius: '50%' }} />

                        </Grid>
                        </Grid>
                    </CardContent>

                
            </Card>
        </>);
}

export default Home;