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
import { Box } from '@mui/system';

const PostCard = (props) => {

    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';

    const [like, setLike] = useState(props.values.likes.includes(props.userId));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [like]);


    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month, day, hour, minute);
        return val.toDateString();
    }

    const likeBtnPressed = async () => {
        setLoading(true);
        fetch(`${postUrl}/${props.values._id}/like`, {
            method: 'POST',
            contentType: 'application/json',
            headers: { 'auth-token': props.token }
        }).then((res) => {
            setLike(!like);
        })
    }


    return (<>

        <Card key={props.values._id}>
            <CardContent >
                <Typography color='text.secondary' sx={{ fontSize: 13 }} gutterBottom>{convertTime(props.values.createdAt)}</Typography>
                <Typography variant='h4' sx={{ ml: '2vh', mr: '2vh' }}> {props.values.title} </Typography>

                <Typography sx={{ mt: '1vh', ml: '2vh', mr: '2vh' }}>
                    {props.values.content}
                </Typography>

            </CardContent >
            <CardActions>

                <IconButton sx={{ marginLeft: 'auto' }} onClick={async () => { likeBtnPressed() }} disabled={loading}>
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
                <IconButton sx={{ marginLeft: 'auto' }} >
                    <AddCommentIcon />
                </IconButton>

            </CardActions>
        </Card>





    </>)

}

export default PostCard;