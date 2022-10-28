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

const NewPost = (props) => {

    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month, day, hour, minute);
        return val.toDateString();
    }

    // useEffect(() => {

    //     const fetchData = async () => {
    //         fetch(`${postUrl}/${postId}`, { headers: { 'auth-token': props.token } })
    //             .then(response => {
    //                 if (response.ok) {
    //                     return response.json();
    //                 }
    //                 throw response;
    //             }).then(res => {
    //                 setPost(res);

    //             }).catch(e => {
    //                 console.error("Error fetching data: ", e);
    //             }).finally(() => {

    //                 setLoading(false);

    //             });
    //     }

    //     fetchData().catch(console.error);


    // }, []);

    return (<>
        {loading ? (
            <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                <CircularProgress />
            </Container>
        ) : (
            <>
                <Card sx={{ ml: { xs:'1vh', lg:'20%'}, mr: {xs:'1vh', lg:'20%'}, mt:'1vh' }}>
                    <CardContent >
                        <Typography align='center' variant='h1'>New post</Typography>


                    </CardContent >
                </Card>
                

            </>)}
    </>)

}

export default NewPost;