import profilePic from '../static/img/croppedprofilepic.jpg';
import axess from '../static/img/axess.png';
import maxkompetens from '../static/img/maxkompetens.png';
import systembolaget from '../static/img/systembolaget.png';
import htmlCssJs from '../static/img/htmlcssjs-overview.png';
import reactLogo from '../static/img/reactLogo.png';
import cSharp from '../static/img/cSharp.svg';

import {
    Card,
    CardContent,
    Grid, Typography
} from '@mui/material';

import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import React, { useState } from 'react';
import ExperienceCard from './components/home_components/ExperienceCard';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';


const Home = () => {


    return (
        <>

            <Grid container
                direction={{ xs: 'column', md: 'row' }}
                >
                <Grid item xs={12} md={6} sx={{ mt: '1vh', mb: '3rem' }} align='center'>
                    <Card sx={{ mt: '1vh', mr: { xs: '1vh', md: '10%' }, ml: { xs: '1vh', md: '2%' } }}>
                        <CardContent sx={{ backgroundColor: '#858585' }}>

                            <img src={profilePic} style={{ width: '75%', maxWidth: '15rem', borderRadius: '50%' }} />
                            <Container >
                                <Typography variant='h4'>Johan Jakberger</Typography>
                                <Typography variant='h6'>johanjakberger@gmail.com</Typography>
                                <Typography variant='h6'>Värmland, Sweden</Typography>
                                <Typography variant='h6'>0707 - 36 47 57</Typography>
                            </Container>

                        </CardContent>
                    </Card>

                    <Grid
                        container
                        spacing={2}
                        direction={'row'}>


                        <Grid item xs={12} sx={{ mt: '1vh', mr: { xs: '1vh', md: '10%' }, ml: { xs: '1vh', md: '2%' } }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ mt: '1vh' }}>

                                    <Typography align='center' sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, color: '#525252' }} variant='h4' gutterBottom>
                                        <SchoolRoundedIcon fontSize='large' />
                                        Kunskap</Typography>
                                </Grid>

                                <ExperienceCard
                                    maxWidth='100%'
                                    color='#C4B1C4'
                                    img={htmlCssJs}
                                    url='#'
                                    workPlace='Webb utveckling'
                                    where='HTML, CSS, JavaScript'
                                    workTitle={['']}
                                    workedBetween=''
                                    content={['Jag må inte vara en designer, men med rätt team och driv så är det inga problem.',
                                        'Anser mig själv vara mer inriktad på backend och dom tyngre ämnena, men denna biten är inga problem.']} />

                                <ExperienceCard
                                    maxWidth='50%'
                                    color='#C4B1C4'
                                    img={reactLogo}
                                    url='#'
                                    workPlace='React JS'
                                    where=''
                                    workTitle={['']}
                                    workedBetween=''
                                    content={['Hela denna sidan är uppbyggd på React, med Material UI som byggstenar.',
                                        'Personligen så ser jag fördelar i React, men har använt mig av Django innan också, med uppskattade resultat, samt ASP.NET som jag fortfarande lär mig.']}
                                />
                                <ExperienceCard
                                    maxWidth='50%'
                                    color='#C4B1C4'
                                    img={cSharp}
                                    url='#'
                                    workPlace='C#'
                                    where=''
                                    workTitle={['Kurser utförda: ', 'Programmering 1', 'Programmering 2']}
                                    workedBetween='2015 ->'
                                    content={['Pluggat upp programmering förr via Komvux. Kommer att studera upp mina gymnasiebetyg under 2023 för möjlighet att studera på yrkeshögskola inom systemutveckling eller, hellre, embedded programmering och lära mig IoT programmering.',
                                        'Det var C++ jag började med när jag var 15 år (2005) och sen så byggdes det vidare med C# och Python, samt Java, Xamarin (.NET MAUI nu), Kotlin och mer Javascript nu.']}
                                />

                                
                            </Grid>


                        </Grid>

                    </Grid> {/* Arbetserfarenhets grid container  */}





                </Grid>
                <Grid item xs={12} md={6} >

                    <Grid
                        container
                        spacing={2}
                        direction={'row'}>


                        <Grid item xs={12} sx={{ mt: '1vh', mr: '1vh', ml:'1vh' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ mt: '1vh' }}>

                                    <Typography align='center' sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, color: '#525252' }} variant='h4' gutterBottom>
                                        <BusinessCenterRoundedIcon fontSize='large' />
                                        Erfarenhet</Typography>
                                </Grid>

                                <ExperienceCard
                                    maxWidth='100%'
                                    color='#B8B8B8'
                                    img={systembolaget}
                                    url='https://www.systembolaget.se/'
                                    workPlace='Systembolaget'
                                    where='Halmstad / Grums'
                                    workTitle={['Butikspersonal']}
                                    workedBetween='December 2021 - September 2022'
                                    content={['Deltidsanställning medans jag letat heltidsarbete, se info nedan då jag arbetat här innan.']} />

                                <ExperienceCard
                                    maxWidth='100%'
                                    color='#B8B8B8'
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
                                    maxWidth='100%'
                                    color='#B8B8B8'
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
                                    maxWidth='100%'
                                    color='#B8B8B8'
                                    img={systembolaget}
                                    url='https://www.systembolaget.se/'
                                    workPlace='Systembolaget'
                                    where='Sunne / Halmstad'
                                    workTitle={['Butikspersonal']}
                                    workedBetween='April 2014 - September 2017'
                                    content={['Väldigt fokus på kundhantering, lära sig mycket om alkohol och dryck till mat, vilket är ett intresse hos mig som hobby. Fick även lite administrativa uppgifter t.ex möjlighet att hålla i provningar, samt agera sekreterare till möten.']} />


                            </Grid>


                        </Grid>

                    </Grid> {/* Arbetserfarenhets grid container  */}

                </Grid> {/* Erfarenhets grid item. */}


            </Grid> {/* Hela containerns för sidan */}

        </>);
}

export default Home;