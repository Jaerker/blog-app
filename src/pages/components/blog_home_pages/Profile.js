import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
    Container,
    Card,
    CardContent,
    CardHeader,
    Typography,
    CircularProgress,
    Grid,
    CardActions,
    IconButton,

} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCommentIcon from '@mui/icons-material/AddComment';

const Profile = (props) => {

    const profileUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/users';

    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState(null);

    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month - 1, day, hour, minute);
        return val.toDateString();
    }


    useEffect(() => {

        const fetchData = async () => {
            fetch(`${profileUrl}/${props.user._id}`, { headers: { 'auth-token': props.token } })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(res => {
                    setProfile(res);

                }).catch(e => {
                    console.error("Error fetching data: ", e);
                }).finally(() => {

                    setLoading(false);

                });
        }

        fetchData().catch(console.error);


    }, []);


    return (<>
        <Typography variant='h2' align='center'>Profile</Typography>
        {loading ? (
            <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                <CircularProgress />
            </Container>
        ) : (
            <>
                <Card sx={{ ml: { xs: '1vh', lg: '20%' }, mr: { xs: '1vh', lg: '20%' }, mt: '1vh' }}>
                    <Container >
                    <CardContent >

                        <Typography variant='h6'>Name: {profile.fName} {profile.lName}</Typography>
                        <Typography variant='h6'>Email: {profile.email}</Typography>
                        <Typography variant='h6'>Account created: {convertTime(profile.date)} </Typography>
                        <Typography variant='h6'>How many you follow: {profile.friends.length}</Typography>
                        <Typography variant='h6'>How many posts you posted: {profile.posts.length}</Typography>
                    </CardContent >
                    </Container>
                </Card>


            </>)}
    </>)

}

export default Profile;