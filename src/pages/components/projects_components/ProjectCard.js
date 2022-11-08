import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';

const ProjectCard = (props) => {

    

    return (
        <Container>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component='img'
                    height='100%'

                    image={props.logo}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography variant='subtitle1'>{props.content}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button name={props.btnName} onClick={props.btnClick}>LÄS MER</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default ProjectCard