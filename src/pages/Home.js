import profilePic from '../static/img/croppedprofilepic.jpg';
import axess from '../static/img/axess.png';
import maxkompetens from '../static/img/maxkompetens.png';
import systembolaget from '../static/img/systembolaget.png';


import {
    Card,
    CardContent,
    Grid, Typography
} from '@mui/material';
import React, { useState } from 'react';
import ExperienceCard from './components/home_components/ExperienceCard';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';


const Home = () => {


    return (
        <>
            <Container align='center'>
                <Grid container
                    direction={{xs:'column', md:'row'}}>
                    <Grid item xs={12} md={6} sx={{ mt: '1vh', mb: '3rem' }}>
                    <Card sx={{ mt: '1vh', mr: { xs: '0', md: '10%', lg: '15%' }, ml: { xs: '0', md: '5%', lg: '15%' } }}>
                        <CardContent sx={{ backgroundColor: '#858585' }}>

                            <img src={profilePic} style={{ width: '75%', maxWidth: '15rem', borderRadius: '50%' }} />
                            <Container >
                                <Typography variant='subtitle1'>Johan Jakberger</Typography>
                                <Typography variant='subtitle1'>johanjakberger@gmail.com</Typography>
                                <Typography variant='subtitle1'>Värmland, Sweden</Typography>
                                <Typography variant='subtitle1'>0707 - 36 47 57</Typography>
                            </Container>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item={12} md={6}>
                    <Card sx={{ mr: { xs: '0', md: '10%', lg: '15%' }, ml: { xs: '0', md: '5%', lg: '15%' }, mt: '2vh' }}>

                        <CardContent>
                            <Grid
                                container
                                spacing={2}
                                direction={'row'}>


                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }} variant='h4' align='center' gutterBottom>Erfarenhet</Typography>
                                        </Grid>

                                        <ExperienceCard
                                            img={systembolaget}
                                            url='https://www.systembolaget.se/'
                                            workPlace='Systembolaget'
                                            where='Halmstad / Grums'
                                            workTitle={['Butikspersonal']}
                                            workedBetween='December 2021 - September 2022'
                                            content={['Deltidsanställning medans jag letat heltidsarbete, se info nedan då jag arbetat här innan.']} />

                                        <ExperienceCard
                                            img={axess}
                                            url='https://www.axesslogistics.com/'
                                            workPlace='Axess Logistics'
                                            where='Halmstad'
                                            workTitle={['Kundtjänst', 'Kvalité och miljösamordnare', 'Tillbehörsmonterare']}
                                            workedBetween='December 2021 - September 2022'
                                            content={['Hade först hand om tillbehörsmontering till bilar, därefter kundtjänst gällande återförsäljare av BMW och MINI. Jag såg till att bilar som kom från Tyskland hamnade rätt i D365 från Båten till Bilfirman, kollade så det inte vara några avvikelser på bilen, fick kolla upp om bilens batteri behövde underhållas eller inte innan den skulle köras iväg till återförsäljare, samt mycket mer administrativa uppgifter.',
                                                'Efter detta, specifikt från September 2020, så började jag som Miljö och Kvalitésamordnare. Det inbegrep:',
                                            ]} table='<ul> <li>Hantering av skadade bilar orsakade, eller upptäckta, i vår vårdnad eller i vårt område.</li><li>Introducera människor till arbetet och informera om vad dom skulle göra.</li><li>Utbildning för samtliga i företaget om hur vi hanterar fordon på området, och hur vi hanterar underhåll av både vanliga bilar och elbilar.</li><li>Fakturering, mestadels mindre utgifter, men även större reklamationer som får undersökas.</li></ul>' />

                                        <ExperienceCard
                                            img={maxkompetens}
                                            url='https://maxkompetens.se/'
                                            workPlace='Maxkompetens'
                                            where='Halmstad'
                                            workTitle={['Bemanningsanställd']}
                                            workedBetween='Oktober 2017 - April 2018'
                                            content={['Mestadels lagerhantering av fordon från hamnen till olika placeringar beroende på vad som behövs göras med bilarna. Även skött underhåll av batterier till bilarna, både vanliga bilbatterier och elbilar.',
                                                'Den senare delen av anställningen så fick jag komma in i verkstaden och bygga in tillbehör på bilar. Det kunde vara allt från stänkskärmar till att lägga golv och klä väggar i t.ex VW Caddys, Transporters och Crafters.',
                                                'Jag fick även möjligheten att bygga PostNord bilar, vilket inbegrep att lära sig dra el i bilen till säkringsdosan för extra-belysning och dylikt.'
                                            ]}
                                        />

                                        <ExperienceCard
                                            img={systembolaget}
                                            url='https://www.systembolaget.se/'
                                            workPlace='Systembolaget'
                                            where='Sunne / Halmstad'
                                            workTitle={['Butikspersonal']}
                                            workedBetween='April 2014 - September 2017'
                                            content={['Väldigt fokus på kundhantering, lära sig mycket om alkohol och dryck till mat, vilket är ett intresse hos mig som hobby. Fick även lite administrativa uppgifter t.ex möjlighet att hålla i provningar, samt agera sekreterare till möten.']} />


                                    </Grid>


                                </Grid>

                            </Grid>
                        </CardContent>


                    </Card>
                </Grid>
            </Grid>
        </Container>
        </>);
}

export default Home;