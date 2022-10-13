import { Container } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';


function Home(){


    return(
    <>
    <Container>
    <h1>This is working</h1>
    <h2>Do you want to see the blog api?</h2>
    <Link to="blog">Click here!</Link>
    </Container>
    <Container>
        <Link to="resume">Here is my resume!</Link>
        </Container>
    </>
    );
}

export default Home;