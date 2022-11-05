import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  TextField,
  FormControl,
  Button,
  Collapse,
  Alert,

} from '@mui/material';

import { Box } from '@mui/system';

const NewPost = (props) => {

  const postUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/posts';
//  const postUrl = 'http://localhost:3033/api/blog/posts';


  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);

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

  const handlePostChange = (e) => {
    const { value, name } = e.target;

    setNewPost((prevValue) => {
      console.log(prevValue);
      return {
        ...prevValue,
        [name]: value
      }
    });

  }

  const btnClicked = async (e) => {
    e.preventDefault();
    setLoading(true);


    const response = await axios.post(`${postUrl}/`, newPost, { headers: { 'auth-token': props.token } }).then((res) => {

      setNewPost({ title: '', content: '' });
      return ['Post was sent succesfully!', 'success'];

    }).catch((err) => {

      return [`Error: ${err.response.data}`, 'warning'];

    });

    setAlertMsg({
      message: response[0],
      severity: response[1],
      showing: true
    });

    setLoading(false);

    setAlertTimer();


  }


  return (<>
    <Typography align='center' variant='h2'>New post</Typography>
    <Container align='center'>
      <Collapse in={alertMsg.showing} sx={{ ml: { xs: '1vh', lg: '20%' }, mr: { xs: '1vh', lg: '20%' }, mb: '-1.3vh' }}>
        <Alert onClose={() => {
          setAlertMsg((prevValue) => {
            return {
              ...prevValue,
              showing: false
            }
          })
        }} severity={alertMsg.severity}>{alertMsg.message} </Alert>
      </Collapse>
    </Container>
    {loading ? (
      <Container sx={{ top: '50%', left: '50%' }} >
        <CircularProgress />
      </Container>
    ) : (
      <>
        <Container align='center'>
          <Card sx={{ ml: { xs: '1vh', lg: '20%' }, mr: { xs: '1vh', lg: '20%' }, mt: '1vh' }}>
            <CardContent >
              <Box component='form'>
                <FormControl onChange={handlePostChange} sx={{ width: '80%' }} variant='standard'>
                  <TextField autoFocus minRows={1} required id='title' name='title' label='Title' variant='standard' value={newPost.title} />
                  <TextField required multiline rows={5} id='content' name='content' label='Content' variant='standard' type='password' value={newPost.content} />
                  <Button type="submit" name='login' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>Post it</Button>
                </FormControl>
              </Box>


            </CardContent >
          </Card>
        </Container>

      </>)}
  </>)

}

export default NewPost;