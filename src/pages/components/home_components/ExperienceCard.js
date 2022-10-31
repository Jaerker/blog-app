import React from 'react';


import {
    Button,
    Card,
    CardContent,
    Grid, IconButton, Typography
} from '@mui/material';

const ExperienceCard = (props) => {



    return (
        <Grid item xs={12} >
            <Card >
                <CardContent sx={{ backgroundColor: props.color}}>
                    <Grid container direction='row' spacing={2} alignItems='center' justifyContent='space-evenly' sx={{ mb: '2vh' }}>
                        <Grid item xs={12} md={6} align='center' justify='center'>
                            <Button onClick={()=>{window.location.assign(props.url)}}>
                            <img  src={props.img} style={{ maxWidth: props.maxWidth }} />
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} align='center' justify='center' >
                            <Typography variant='h5'><strong>{props.workPlace}</strong></Typography>
                            <Typography gutterBottom variant='h6' >{props.where}</Typography>
                            {props.workTitle?.map((title) => (
                                <Typography key={title} gutterBottom variant='h6' > {title}</Typography>
                            ))}

                            <Typography paragraph variant='subtitle1' color={'#FFF'}>{props.workedBetween}</Typography>
                        </Grid>

                    </Grid>

                    {props.content?.map((paragraph) => {

                        return <Typography align='center' key={paragraph} paragraph variant='body1'>{paragraph}</Typography>
                    })}
                    {props.table && (
                        <Typography paragraph align='left' variant='body1'><span dangerouslySetInnerHTML={{__html:props.table}}/></Typography>
                        
                    )}


                </CardContent>
            </Card>
        </Grid>
    )
}

export default ExperienceCard;

// <ExperienceCard img= workPlace= where= workTitle= workedBetween= content=[]  />