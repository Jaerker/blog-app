import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';

const ProjectCard = (props) => {


    

    return (
        <Container>
            <Card sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', maxWidth: 250, height: 500}}>
                <CardMedia
                    component='img'

                    image={props.logo}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography variant='subtitle1'>{props.content}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', alignItems:'end',  }}>
                   <Button variant='outlined' fullWidth name={props.btnName} onClick={props.btnClick}>LÄS MER</Button>
                    
                </CardActions>
            </Card>
        </Container>
    )
}

export default ProjectCard