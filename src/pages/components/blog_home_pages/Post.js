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

const Post = (props) => {

    let { postId } = useParams();
    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month, day, hour, minute);
        return val.toDateString();
    }
    

    useEffect(() => {

        const fetchData = async () => {
            fetch(`${postUrl}/${postId}`, { headers: { 'auth-token': props.token } })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(res => {
                    setPost(res);

                }).catch(e => {
                    console.error("Error fetching data: ", e);
                }).finally(() => {

                    setLoading(false);

                });
        }

        fetchData().catch(console.error);


    }, []);

    

    return (<>
        {loading ? (
            <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                <CircularProgress />
            </Container>
        ) : (
            <>
                <Card key={post} sx={{ ml: { xs:'1vh', lg:'20%'}, mr: {xs:'1vh', lg:'20%'}, mt:'1vh' }}>
                    <CardContent >
                        <Typography variant='h4' gutterBottom >{post.title}</Typography>
                        <Typography variant='subtitle1' sx={{color: '#A4A4A4'}}>Created by {post.author.fName}</Typography> <Typography variant='subtitle2' sx={{color: '#A4A4A4'}}> {convertTime(post.createdAt)}</Typography>
                        
                        <p>{post.content}</p>


                    </CardContent >
                </Card>
                <Card sx={{ ml: {xs:'10%', md:'20%', lg:'30%'}, mr: {xs:'10%', md:'20%', lg:'30%'}, mt: '1vh' }}>

                    <CardContent>
                        <Typography variant='h4' align='center' gutterBottom >Comments</Typography>
                        {post.comments.length !== 0 ? (
                            post.comments.map((comment) => (
                                <Container key={comment}>
                                    <h3>{convertTime(comment.createdAt)}</h3>
                                    <h1>{comment.content}</h1>
                                </Container>

                            ))
                        ) : (
                            <Typography variant='h6' align='center' >Be the first one to comment!</Typography>
                        )}
                        
                    </CardContent>
                </Card>

            </>)}
    </>)

}

export default Post;