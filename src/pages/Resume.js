import profilePic from '../static/img/croppedprofilepic.jpg';
import axess from '../static/img/axess.png';
import maxkompetens from '../static/img/maxkompetens.png';
import systembolaget from '../static/img/systembolaget.png';


import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Container } from '@mui/system';


const Resume = () => {


    return (
        <>
            <Card sx={{ mr: '10%', ml: '10%', mt: '1vh' }}>

                <CardContent>
                    <Grid
                        container
                        spacing={2}
                        direction={'row'}>
                        <Grid item xs={1} md={2} lg={3} xl={3.5}>

                        </Grid>
                        <Grid item xs={10} md={8} lg={6} xl={5} >

                            <Typography sx={{ border: '1px solid black', borderRadius: '5px', fontSize:{xs:'2rem', md:'3rem', lg:'4rem'} }} variant='h4' align='center' gutterBottom>
                                Johan Jakberger
                            </Typography>

                        </Grid>
                        <Grid item xs={1} md={2} lg={3} xl={3.5}>

                        </Grid>
                        <Grid item xs={12} align='center'>
                            <img src={profilePic} style={{ width: '75%', maxWidth: '15rem', borderRadius: '50%' }} />

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography sx={{fontSize:{xs:'2.5rem', md:'3rem'}}} variant='h4' align='center' gutterBottom>Erfarenhet</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card >
                                        <CardContent sx={{ backgroundColor: '#B2B2B2' }}>
                                            <Grid container direction='row' spacing={2} justifyContent='space-evenly' sx={{ mb: '2vh' }}>
                                                <Grid item>
                                                    <img src={systembolaget} />
                                                </Grid>
                                                <Grid item align='center'>
                                                    <Typography variant='h5'><strong>Systembolaget</strong></Typography>
                                                    <Typography gutterBottom variant='h6' >Halmstad/Grums - Butikspersonal</Typography>
                                                    <Typography paragraph variant='subtitle1' color={'#FFF'}>December 2021 - September 2022</Typography>
                                                </Grid>

                                            </Grid>


                                            <Typography paragraph variant='body1'>Deltidsanställning medans jag letat heltidsarbete, se info nedan då jag arbetat här innan</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card >
                                        <CardContent sx={{ backgroundColor: '#B2B2B2' }}>

                                            <Grid container direction='row' spacing={2} justifyContent='space-evenly' sx={{ mb: '2vh' }}>
                                                <Grid item>
                                                    <img src={axess} />
                                                </Grid>
                                                <Grid item align='center'>
                                                    <Typography variant='h5'><strong>Axess Logistics</strong></Typography>
                                                    <Typography gutterBottom variant='h6' >Halmstad - Kundtjänst /</Typography>
                                                    <Typography gutterBottom variant='h6' > Kvalité och miljösamordnare /</Typography><Typography gutterBottom variant='h6' > Tillbehörsmontering</Typography>
                                                    <Typography paragraph variant='subtitle1' color={'#FFF'}>Maj 2018 - Oktober 2021</Typography>
                                                </Grid>

                                            </Grid>

                                            <Typography paragraph variant='body1'>Hade först hand om tillbehörsmontering till bilar, därefter kundtjänst
                                                gällande återförsäljare av BMW och MINI. Jag såg till att bilar som kom
                                                från Tyskland hamnade rätt i D365 från Båten till Bilfirman, kollade så
                                                det inte vara några avvikelser på bilen, fick kolla upp om bilens batteri
                                                behövde underhållas eller inte innan den skulle köras iväg till
                                                återförsäljare, samt mycket mer administrativa uppgifter.</Typography>
                                            <Typography variant='body1'>Efter detta, specifikt från September 2020, så började jag som Miljö och
                                                Kvalitésamordnare. Det inbegrep:</Typography>

                                            <Typography variant='body1'>
                                                <ul>
                                                    <li>Hantering av skadade bilar orsakade, eller upptäckta, i vår
                                                        vårdnad eller i vårt område.</li>
                                                    <li>Introducera människor till arbetet och informera om vad dom
                                                        skulle göra.</li>
                                                    <li>Utbildning för samtliga i företaget om hur vi hanterar fordon på
                                                        området, och hur vi hanterar underhåll av både vanliga bilar och elbilar.</li>
                                                    <li>Fakturering, mestadels mindre utgifter, men även större
                                                        reklamationer som får undersökas.</li>
                                                </ul></Typography>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card >
                                        <CardContent sx={{ backgroundColor: '#B2B2B2' }}>

                                            <Grid container direction='row' spacing={2} justifyContent='space-evenly' sx={{ mb: '2vh' }}>
                                                <Grid item>
                                                    <img src={maxkompetens} />
                                                </Grid>
                                                <Grid item align='center'>
                                                    <Typography variant='h5'><strong>Maxkompetens</strong></Typography>
                                                    <Typography gutterBottom variant='h6' >Halmstad - Bemanningsanställd</Typography>
                                                    <Typography paragraph variant='subtitle1' color={'#FFF'}>Oktober 2017 - April 2018</Typography>
                                                </Grid>

                                            </Grid>


                                            <Typography paragraph variant='body1'>Mestadels lagerhantering av fordon från hamnen till olika placeringar
                                                beroende på vad som behövs göras med bilarna. Även skött underhåll av
                                                batterier till bilarna, både vanliga bilbatterier och elbilar.</Typography>

                                            <Typography paragraph variant='body1'>Den senare delen av anställningen så fick jag komma in i verkstaden och
                                                bygga in tillbehör på bilar. Det kunde vara allt från stänkskärmar till att
                                                lägga golv och klä väggar i t.ex VW Caddys, Transporters och Crafters.</Typography>

                                            <Typography paragraph variant='body1'>Jag fick även möjligheten att bygga PostNord bilar, vilket inbegrep att lära
                                                sig dra el i bilen till säkringsdosan för extra-belysning och dylikt.</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card >
                                        <CardContent sx={{ backgroundColor: '#B2B2B2' }}>

                                            <Grid container direction='row' spacing={2} justifyContent='space-evenly' sx={{ mb: '2vh' }}>
                                                <Grid item>
                                                    <img src={systembolaget} />
                                                </Grid>
                                                <Grid item align='center'>

                                                    <Typography variant='h5'><strong>Systembolaget</strong></Typography>
                                                    <Typography gutterBottom variant='h6' >Sunne, Halmstad - Bemanningsanställd</Typography>
                                                    <Typography paragraph variant='subtitle1' color={'#FFF'}>April 2014 - September 2017</Typography>
                                                </Grid>

                                            </Grid>

                                            <Typography paragraph variant='body1'>Väldigt fokus på kundhantering, lära sig mycket om alkohol och dryck till
                                                mat, vilket är ett intresse hos mig som hobby. Fick även lite
                                                administrativa uppgifter t.ex möjlighet att hålla i provningar, samt agera
                                                sekreterare till möten.</Typography>

                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>
                </CardContent>


            </Card>
        </>
    );
}

export default Resume;