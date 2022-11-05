import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
    Container,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Grid,
    FormControl,
    TextField,
    Button,
    Collapse,
    Alert,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Popover,
    Backdrop,
    Table,
} from '@mui/material';


import { Box } from '@mui/system';
import AlertMessage from './components/AlertMessage';

const Post = (props) => {


    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [alertMsg, setAlertMsg] = useState({
        message: 'Verification mail has ben sent to you!',
        severity: 'success',
        showing: false
    });
    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const [comment, setComment] = useState({ content: '' });
    //Comment includes: content and user, only need to send content

    const { postId } = useParams();
    const postBase = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';
    //const postBase = 'http://localhost:3033/api/blog/posts';

    const postUrl = `${postBase}/${postId}`

    //Popover variables
    const open = Boolean(popoverAnchorEl);
    const id = open ? 'verifyDelete' : undefined;
    const popoverPosition = [window.innerWidth / 2, window.innerHeight / 2];


    const fetchData = async () => {

        fetch(postUrl, { headers: { 'auth-token': props.token } })
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


    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month - 1, day, hour, minute);
        return val.toDateString();
    }

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


    /* Popover function regarding deletion of posts  */

    const handlePopup = (e) => {
        if (e.target.id === 'firstBtn') {
            setPopoverAnchorEl(e.currentTarget);
        } else {
            setPopoverAnchorEl(null);
        }

    }



    /* Comment handling  */

    const handleCommentChange = (event) => {
        const { value, name } = event.target;
        setComment((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    const commentBtn = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (comment.content !== '' && comment.content.replace(/\s/g, '') !== '') {

            /* Add comment to post, and if there is an error, it will display the error in the alert */
            const response = await axios.post(postUrl, comment, { headers: { 'auth-token': props.token } }).then(() => {

                setComment({ content: '' });
                return ['Post was sent succesfully!', 'success'];

            }).catch((err) => {

                return [`Error: ${err.response.data}`, 'warning'];

            });

            setAlertMsg({
                message: response[0],
                severity: response[1],
                showing: true
            });

            /* refresh post with the new comment */
            fetch(postUrl, { headers: { 'auth-token': props.token } })
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

    /* Delete handling */

    const deleteBtn = async (e) => {
        //setLoading(true);

        let homeAlert = alertMsg;

        const response = await axios.delete(postUrl, { headers: { 'auth-token': props.token } }).then((response) => {
            if (response.ok) { return response.json() }
            throw response;
        }).then((response) => {
            return ['Succesfully deleted post', 'success'];

        }).catch((err) => {

            return [`Error: ${err.response?.data}`, 'warning'];

        });

        homeAlert = {
            message: response[0],
            severity: response[1]
        };

        window.location.assign(`/blog`);





        handlePopup(e);
        // setLoading(false);
    }



    useEffect(() => {
        fetchData().catch(console.error);
        console.log(post)
    }, []);


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
                            <>
                                <Button id='firstBtn' color='error' variant='contained' onClick={handlePopup}>
                                    DELETE
                                </Button>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                >
                                    {loading ? (
                                        <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                                            <CircularProgress />
                                        </Container>
                                    ) : (
                                        <Popover

                                        anchorEl={popoverAnchorEl}
                                        anchorReference='anchorPosition'
                                        id={id}
                                        open={open}
                                        anchorPosition={{ top: popoverPosition[1], left: popoverPosition[0] }}
                                        anchorOrigin={{
                                            vertical: 'center',
                                            horizontal: 'center'
                                        }}
                                        transformOrigin={{
                                            vertical: 'center',
                                            horizontal: 'center'
                                        }}
                                    >
                                        <Grid container align='center' justifyContent='center' sx={{ minWidth: { xs: '25rem' }, minHeight: { xs: '10rem' } }}>
                                            <Grid item sx={{ mt: '2vh' }}>
                                                <Typography variant='h5' >Do you really want to remove the post?</Typography>

                                            </Grid>
                                            <Grid container item direction='row' justifyContent='space-around' >
                                                <Grid item xs={6}>
                                                    <Button sx={{ width: '75%', height: '75%' }} variant='contained' color='error' id='yes' onClick={deleteBtn}>YES</Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button sx={{ width: '75%', height: '75%' }} variant='contained' id='no' onClick={handlePopup} >NO</Button>
                                                </Grid>

                                            </Grid>

                                        </Grid>

                                    </Popover>   
                                    )}
                                    

                                </Backdrop>{/* The item that turns screen dark */}
                            </>
                        ) : (<></>

                        )}




                    </CardContent >
                </Card>

                <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

                {/* <Container align='center' sx={{ mt: '2vh' }}>
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
                </Container> */}
                <Card sx={{ ml: { xs: '10%', md: '20%' }, mr: { xs: '10%', md: '20%' }, mt: '1vh' }}>

                    <CardContent >
                        <Typography variant='h4' align='center' gutterBottom >Comments</Typography>
                        {post.comments.length !== 0 ? (

                            <TableContainer >
                                <Table>
                                    <TableBody>
                                        {post.comments.map((comment) => (

                                            <TableRow key={comment._id}>

                                                <TableCell><Typography variant='h6' gutterBottom>{comment.username}: </Typography></TableCell>
                                                <TableCell ><Typography variant='body1' gutterBottom>{comment.content} </Typography></TableCell>

                                            </TableRow>




                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>





                        ) : (
                            <>
                                <Typography variant='h6' align='center' >Be the first one to comment!</Typography>

                            </>

                        )}
                        <Box component='form' align='center'>
                            <FormControl variant='standard' onChange={handleCommentChange}>
                                <TextField name='content' label='Comment' multiline rows='3' value={comment.content} />
                                <Button name='comment' type='submit' onClick={commentBtn} sx={{ mt: '1vh' }} variant='contained' >Comment</Button>
                            </FormControl>
                        </Box>

                    </CardContent>
                </Card>

            </>)}
    </>)

}

export default Post;