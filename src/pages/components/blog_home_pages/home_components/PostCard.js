import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

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
import { Box } from '@mui/system';


const PostCard = (props) => {

    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';
    //    const postUrl = 'http://localhost:3033/api/blog/posts';


    const [likes, setLikes] = useState(props.values.likes.length);
    const [like, setLike] = useState(props.values.likes.includes(props.userId));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [like]);


    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month - 1, day, hour, minute);
        return val.toDateString();
    }

    const likeBtnPressed = async () => {

        setLoading(true);
        fetch(`${postUrl}/${props.values._id}/like`, {
            method: 'POST',
            contentType: 'application/json',
            headers: { 'auth-token': props.token }
        }).then((res) => {
            setLikes((prevValue)=>{
              return like ?  prevValue-1 : prevValue+1; 
            })
            setLike(!like);
            
        })
    }


    return (<>

        <Card key={props.values._id}>
            <CardContent >
                <Typography color='text.secondary' sx={{ fontSize: 13 }} gutterBottom>Posted {convertTime(props.values.createdAt)} by {props.values.author.username}</Typography>
                <Container>
                    <Typography component={Link} to={`/blog/post/${props.values._id}`} sx={{ textDecoration: 'none', color: '#000', ":hover": { color: '#A9A9A9' } }} variant='h4' > {props.values.title} </Typography>
                </Container>
                <Typography sx={{ mt: '1vh', ml: '2vh', mr: '2vh' }}>
                    {props.values.content.length > 100 ? (
                        props.values.content.substr(0, 100) + '...'
                    ) : (
                        props.values.content
                    )}


                </Typography>

            </CardContent >
            <CardActions>

                <IconButton sx={{ marginLeft: 'auto' }} onClick={async () => { likeBtnPressed() }} disabled={loading}>
                    <Typography variant='subtitle1'>{likes}</Typography>
                    {loading ? (

                        <CircularProgress size={24} />

                    ) : (
                        like ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        ))

                    }

                </IconButton>
                <Typography variant='subtitle1' > {props.values.comments.length} </Typography><AddCommentIcon />


            </CardActions>
        </Card>





    </>)

}

export default PostCard;