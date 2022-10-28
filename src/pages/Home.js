import profilePic from '../static/img/croppedprofilepic.jpg';

import {
    Card,
    CardContent,
    Grid, Typography
} from '@mui/material';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Box } from '@mui/system';


const Home = () => {

    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

    return (
        <>
            <Typography gutterBottom sx={{fontSize:{xs:'4rem', md:'5rem'}}} align='center'>Välkommen</Typography>
            <Card sx={{ mr: '5%', ml: '5%' }}>

                <CardContent>
                    <Grid
                        container
                        spacing={2}
                        direction={'column'}>
                        <Grid item xs={12} >



                            <Typography sx={{fontSize:{xs:'2rem', md:'4rem'}}}  align='center' gutterBottom>
                                Allt om mig
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography sx={{fontSize:{xs:'1rem', md:'1.5rem'}, mb:'4vh'}}  >För tillfället så studerar jag på egen hand inom programmering och
                                webbutveckling, samt ska studera upp mina gymnasiebetyg för möjlighet
                                till YH utbildning inom systemutveckling, Apputveckling eller IoT,
                                samtidigt som jag och min fru tar hand om 3 vilda ungar i Slottsbron!
                                Mina intressen är teknik, musik, hembryggning av det mesta och
                                matlagning/bakning!</Typography>

                            <Typography sx={{fontSize:{xs:'1rem', md:'1.5rem'}, mb:'4vh'}} >Mitt största intresse är just teknik och IT, så vare sig det är små eller
                                större uppgifter jag får så ger jag verkligen allt jag kan för att sköta dom
                                och lösa dom.</Typography>

                            <Typography sx={{fontSize:{xs:'1rem', md:'1.5rem'}, mb:'4vh'}}>Är det också en ny uppgift som kommer så blir det som en nytändning i
                                kroppen och man får ett extra driv att vilja lära sig och bli så bra som
                                möjligt i ämnet!</Typography>

                                <Typography sx={{fontSize:{xs:'1rem', md:'1.5rem'}, mb:'4vh'}} >Kolla gärna in min 'Blog API'! Registrera dig och se vad jag har gjort med väldigt lite tid och kunskap! Tänka sig vad man kan åstadkomma om man kan sitta med detta heltid.. </Typography>

                        </Grid>

                    </Grid>
                </CardContent>


            </Card>
        </>);
}

export default Home;