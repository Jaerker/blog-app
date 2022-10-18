
import {
    Grid
} from '@mui/material';
import React, {useState} from 'react';
import Navbar from './components/Navbar';


const Home = () => {

    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}

export default Home;