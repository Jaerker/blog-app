import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  CircularProgress,

} from '@mui/material';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';



const BlogHome = (props) => {


  // const updatePosts =  async () =>{
  //   const response = await axios.get('https://blog-api-production-68d6.up.railway.app/api/blog/posts',
  //     {
  //       headers: {
  //         'auth-token': props.token.token
  //       }
  //     });

  //     setPosts(response.data);


  // }


  const [name, setName] = useState(props.values.fName);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://blog-api-production-68d6.up.railway.app/api/blog/posts', {headers: {'auth-token': props.values.token}})
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw response;
    }).then(res =>{
      setPosts(res);
    }).catch(e =>{
      console.error("Error fetching data: ", e);
      setError(e);
    }).finally(()=>{
      setLoading(false);
      
    });
  }, []);


  const btnClicked = async () => {
    const response = await axios.get('https://blog-api-production-68d6.up.railway.app/api/blog/posts',
      {
        headers: {
          'auth-token': props.values.token
        }
      });

    console.log(response.data);
  }

  return (
    <>
      <Card

        sx={{
          textAlign: 'center'
        }}>

        <CardContent>

          <h2>Post API</h2>
          <p>Hello and welcome {name}!</p>

          {loading ? (
            <Box>
            <CircularProgress />
            </Box>
          ) : (
            posts.map((post) => (
            <div key={post._id} id={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              </div>
            ))
          )}  

          <Button variant="contained" component= {Link} to='/'>Press here to go back to the first page</Button>
        </CardContent>
      </Card>
    </>
  )
}

export default BlogHome;
