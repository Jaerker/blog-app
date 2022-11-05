import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Container,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Grid,
    CardActions,
    IconButton,

} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCommentIcon from '@mui/icons-material/AddComment';
import PostCard from './home_components/PostCard';
import AlertMessage from './components/AlertMessage';
import { useParams } from 'react-router-dom';

const Home = (props) => {


    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';
    //const postUrl = 'http://localhost:3033/api/blog/posts';


    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likes, setLikes] = useState(null);
    const [alertMsg, setAlertMsg] = useState(
        useParams()
    );

    const setAlertTimer = () => {
        setTimeout(() => {
            setAlertMsg((prevValue => {
                return {
                    ...prevValue,
                    showing: false
                }
            }))
        }, 5000);
    }







    useEffect(() => {



        const fetchData = async () => {
            fetch(postUrl, { headers: { 'auth-token': props.token } })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(res => {
                    res.reverse();
                    setPosts(res);

                }).catch(e => {
                    console.error("Error fetching data: ", e);
                    setError(e);
                }).finally(() => {

                    setLoading(false);

                });
        }

        fetchData().catch(console.error);


    }, []);


    return (
        <Grid
            container
            spacing={1}>

            <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

            {loading ? (
                <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                    <CircularProgress />
                </Container>
            ) : (
                posts?.map((post) => (
                    <Grid item key={post._id} id={post._id} xs={12} md={4} sx={{ mr: { xs: '10%', md: '0' }, ml: { xs: '10%', md: '0' }, mt: '1vh' }}>
                        <PostCard values={post} token={props.token} userId={props.user._id} />
                    </Grid>
                ))
            )}
        </Grid>
    )
}

export default Home;