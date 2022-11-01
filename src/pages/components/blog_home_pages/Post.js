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
    FormControl,
    TextField,
    Button,
    Collapse,
    Alert,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,

} from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Box } from '@mui/system';

const Post = (props) => {

    let { postId } = useParams();
    const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState({ content: '' });
    //Comment includes: content, user

    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month - 1, day, hour, minute);
        return val.toDateString();
    }

    const [alertMsg, setAlertMsg] = useState({
        message: 'Verification mail has ben sent to you!',
        severity: 'success',
        showing: false
    });

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


    const btnClick = (e) => {
        e.preventDefault();

        setLoading(true);
        fetchData(e.target.name).catch((e) => {
            console.log(e)
        })


    }

    const deleteBtn = () => {

    }

    const fetchData = async (value = "") => {
        if (value === 'update') {
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
        if (value === 'comment') {
            if (comment.content !== '' && comment.content.replace(/\s/g, '') !== '') {

                const response = await axios.post(`${postUrl}/${postId}`, comment, { headers: { 'auth-token': props.token } }).then((res) => {

                    console.log(res);
                    setComment({ content:'' });
                    return ['Post was sent succesfully!', 'success'];
              
                  }).catch((err) => {
              
                    return [`Error: ${err.response.data}`, 'warning'];
              
                  });

                  setAlertMsg({
                    message: response[0],
                    severity: response[1],
                    showing: true
                  });

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
                })



                  
              
                
            }
            else {
                setAlertMsg({
                    message: 'Can not leave an empty comment',
                    severity: 'warning',
                    showing: true
                });

         
            }

            setLoading(false);

                setAlertTimer();



        }
    }


    useEffect(() => {



        fetchData('update').catch(console.error);




    }, []);

    const handleCommentChange = (event) => {
        const { value, name } = event.target;
        setComment((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }



    return (<>

        {loading ? (
            <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                <CircularProgress />
            </Container>
        ) : (
            <>
                <Card key={post} sx={{ ml: { xs: '1vh', lg: '20%' }, mr: { xs: '1vh', lg: '20%' }, mt: '1vh' }}>
                    <CardContent >
                        <Typography variant='h4' gutterBottom >{post.title}</Typography>
                        <Typography variant='subtitle1' sx={{ color: '#A4A4A4' }}>Created by "{post.author.username}"</Typography> <Typography variant='subtitle2' sx={{ color: '#A4A4A4' }}> {convertTime(post.createdAt)}</Typography>

                        {post.content.split('\n').map((section, i, content) => (
                            <Typography key={i} variant='h6' sx={{ mb: '1.5vh' }}>{section}</Typography>
                        ))}

                        {props.user._id === post.author._id ? (
                            <IconButton color='error' >
                                <DeleteForeverIcon fontSize='large' />
                            </IconButton>
                        ) : (<></>

                        )}




                    </CardContent >
                </Card>

                <Container align='center' sx={{ mt: '2vh' }}>
                    <Collapse in={alertMsg.showing} sx={{ ml: { xs: '1vh', md: '20%' }, mr: { xs: '1vh', md: '20%' }, mb: '1vh' }}>
                        <Alert onClose={() => {
                            setAlertMsg((prevValue) => {
                                return {
                                    ...prevValue,
                                    showing: false
                                }
                            })
                        }} severity={alertMsg.severity} >{alertMsg.message} </Alert>
                    </Collapse>
                </Container>
                <Card sx={{ ml: { xs: '10%', md: '20%' }, mr: { xs: '10%', md: '20%' }, mt: '1vh' }}>

                    <CardContent >
                        <Typography variant='h4' align='center' gutterBottom >Comments</Typography>
                        {post.comments.length !== 0 ? (
                            
                                <TableContainer >
                                    {post.comments.map((comment) => (

                                        <TableRow key={comment._id}>

                                            <TableCell><Typography variant='h6' gutterBottom>{comment.username}: </Typography></TableCell>
                                            <TableCell ><Typography variant='body1' gutterBottom>{comment.content} </Typography></TableCell>

                                        </TableRow>




                                    ))}
                                </TableContainer>

                            


                        ) : (
                            <>
                                <Typography variant='h6' align='center' >Be the first one to comment!</Typography>

                            </>

                        )}
                        <Box component='form' align='center'>
                            <FormControl variant='standard' onChange={handleCommentChange}>
                                <TextField name='content' label='Comment' multiline rows='3' value={comment.content} />
                                <Button name='comment' type='submit' onClick={btnClick} sx={{ mt: '1vh' }} variant='contained' >Comment</Button>
                            </FormControl>
                        </Box>

                    </CardContent>
                </Card>

            </>)}
    </>)

}

export default Post;