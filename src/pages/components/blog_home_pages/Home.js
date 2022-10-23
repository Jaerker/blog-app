import React, { useState, useEffect } from 'react';

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

const Home = (props) => {



    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';
    //const postUrl = 'http://localhost:3033/api/blog/posts';


    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month, day, hour, minute);
        return val.toDateString();
    }

    const likeBtnPressed = async (postId) => {
        // fetch(`${postUrl}/${postId}/like`, {
        //     method: 'POST',
        //     headers: { 'auth-token': props.token }
        // }).then(() => {
        //     console.log("woho")
        // })

        await axios.post(`${postUrl}/${postId}/like`, { header: {'auth-token' : props.token}}).then((res)=>{
            console.log(res);
        });

    }

    useEffect(() => {
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
    }, []);

    return (
        <Grid
            container
            spacing={1}

        >

            {loading ? (
                <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                    <CircularProgress />
                </Container>
            ) : (
                posts?.map((post) => (
                    <Grid key={post._id} id={post._id} item xs={12} md={4} sx={{ margin: '1vh' }}>
                        <Card >
                            <CardContent >
                                <Typography color='text.secondary' sx={{ fontSize: 13 }} gutterBottom>{convertTime(post.createdAt)}</Typography>
                                <Typography variant='h4' sx={{ ml: '2vh', mr: '2vh' }}> {post.title} </Typography>

                                <Typography sx={{ mt: '1vh', ml: '2vh', mr: '2vh' }}>
                                    {post.content}
                                </Typography>

                            </CardContent >
                            <CardActions>

                                <IconButton sx={{ marginLeft: 'auto' }} onClick={async () => { likeBtnPressed(post._id) }}>
                                    { }
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton sx={{ marginLeft: 'auto' }} >
                                    <AddCommentIcon />
                                </IconButton>

                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    )
}

export default Home;