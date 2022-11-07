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
                    <Typography variant='subtitle1'>{props.cardContent}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button  onClick={(e) => { setAnchorEl(e.currentTarget) }}>LÄS MER</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default ProjectCard