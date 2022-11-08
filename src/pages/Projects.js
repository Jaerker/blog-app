import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Popover, Backdrop, Grid } from '@mui/material';
import { Container } from '@mui/system';

import lolGameEnd from '../static/img/lekolar/gameEnd.jpg';
import lolGameOne from '../static/img/lekolar/gameOne.jpg';
import lolGameOneCorrect from '../static/img/lekolar/gameOneCorrect.jpg';
import lolGameTwo from '../static/img/lekolar/gameTwo.jpg';
import lolLekolar from '../static/img/lekolar/lekolar.jpg';
import lolLogo from '../static/img/lekolar/logo.jpg';
import lolMenu from '../static/img/lekolar/menu.jpg';

import mmLogo from '../static/img/medieval_malfunction/logo.png';
import mmScreen1 from '../static/img/medieval_malfunction/screen1.png';
import mmScreen2 from '../static/img/medieval_malfunction/screen2.png';
import mmScreen3 from '../static/img/medieval_malfunction/screen3.png';
import mmTitleScreen from '../static/img/medieval_malfunction/titleScreen.png';
import ProjectCard from './components/projects_components/ProjectCard';

//<Grid item xs={12} md={6}></Grid>


const Projects = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const [cardInfo, setCardInfo] = useState(null);

    const fullCardContent = (value) => {
        switch (value) {
            case 'lolBtn':
                return (<Grid container direction='row' align='left'>
                    <Grid item xs={12} md={6} align='center'>
                        <CardMedia
                            component='img'
                            image={lolLogo}
                            alt='Lek och lär logo'
                            sx={{ maxWidth: '25rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Container sx={{ mt: { xs: '1vh', md: '5vh' } }} >
                            <Typography variant='h5' sx={{ mb: '2vh' }}>Jag behövde ett projekt en sommar så jag satte ihop ett litet kortspel till min dotter. </Typography>
                            <Typography variant='h5' sx={{ mb: '2vh' }}>Med tanke på att jag är väldigt intresserad av spelprogrammering så var detta ett väldigt trevligt projekt att testa på, och jag blev väldigt nöjd med resultatet trots små buggar här och var</Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction={{ xs: 'column-reverse', md: 'row' }}>
                            <Grid item xs={12} md={6} sx={{ paddingRight: '2vh', mt: { xs: '0', md: '2.5vh' } }}>
                                <Typography variant='h5' sx={{ mb: '2vh' }}>I spelet finns 2 minispel, vilket är någorlunda självförklarande enligt bilden:</Typography>
                                <Typography variant='h5' sx={{ mb: '2vh' }}> "Vilken ska bort?" och "Vad heter djuret?"</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} align='center'>
                                <CardMedia
                                    component='img'
                                    image={lolMenu}
                                    alt='Meny till spelet'
                                    sx={{ maxWidth: '30rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} align='center' sx={{ paddingRight: { xs: '0', md: '1vh' } }}>
                        <CardMedia
                            component='img'
                            image={lolGameOne}
                            alt='Spel nummer 1'
                            sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} align='center' sx={{ paddingLeft: { xs: '0', md: '1vh' } }}>
                        <CardMedia
                            component='img'
                            image={lolGameOneCorrect}
                            alt='Korrekt val i spelet'
                            sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5' sx={{ mb: '2vh' }} align='center'>Första spelet är så simpelt som: Tryck på djuret som inte hör hemma. </Typography>
                        <Typography variant='h5' sx={{ mb: '2vh' }}>Ibland kan det t.ex dyka upp 2 olika typer av björnar(!) och något annat djur så man kan bli lite vilseledd som barn.  </Typography>
                        <Typography variant='h5' sx={{ mb: '2vh' }}>Om jag hade velat ändra något i båda spelen så hade det vart att ta bort tidspressen, med tanke på att det var riktat till barn. </Typography>
                        <Typography variant='h5' sx={{ mb: '2vh' }}>Spel nummer 2 var mer inriktat på att hitta namnet på djuret som dyker upp (Eller en lök som kan dyka upp när som helst!) vilket skulle nog vara mer kul för min äldsta dotter nu när hon börjar lära sig läsa mer och mer. </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} align='center' sx={{ paddingRight: { xs: '0', md: '1vh' } }}>
                        <CardMedia
                            component='img'
                            image={lolGameTwo}
                            alt='Bild på spel 2'
                            sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} align='center' sx={{ paddingLeft: { xs: '0', md: '1vh' } }}>
                        <CardMedia
                            component='img'
                            image={lolGameEnd}
                            alt='Meny till spelet'
                            sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='h5' align='center'><strong>Något jag lärde mig under denna processen var att:</strong></Typography>
                        <Typography variant='h5' align='left'>
                            <ul >
                                <li style={{ marginBottom: '1vh' }}>Planera projekt och strukturera vad som absolut ska vara med, vad som hade varit roligt att ha med och sådant som kan tas om man får tid över</li>
                                <li style={{ marginBottom: '1vh' }}>Dokumentera dag för dag om vad jag vill få gjort denna dagen, hur jag kan ta mig an uppdraget, vad jag åstadkom under dagen samt vad jag vill ha gjort dagen efter</li>
                                <li style={{ marginBottom: '1vh' }}>Att slutföra ett projekt trots omständigheterna runt mig. Vilket är tack vare systemet ovan, och lite mer fritid än vad man hade innan.</li>
                            </ul></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center'><strong>Spelet finns inte på Google play, utan finns som APK fil hos mig, om man vill testa.</strong></Typography>

                    </Grid>
                    <Grid item xs={12}>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button fullWidth variant='contained' onClick={() => { setAnchorEl(null); }}>GÅ TILLBAKA</Button>
                        </CardActions>
                    </Grid>
                </Grid>)

            case 'mmBtn':
                return (
                    <Grid container direction='row' align='left'>
                        <Grid item xs={12} md={6} align='center'>
                            <CardMedia
                                component='img'
                                image={mmLogo}
                                alt='Medieval Malfunction logo'
                                sx={{ maxWidth: '25rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Container sx={{ mt: { xs: '1vh', md: '5vh' } }} >
                                <Typography variant='h5' sx={{ mb: '2vh' }}>För ett tag sen så var jag och en kompis med i en Game Jam.</Typography>
                                <Typography variant='h5' sx={{ mb: '2vh' }}>Här är resultatet av den andra av dom som vi varit med i, den som jag känner att jag kan visa upp utan att skämmas fullständigt!</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction={{ xs: 'column-reverse', md: 'row' }}>
                                <Grid item xs={12} md={6} sx={{ paddingRight: '2vh', mt: { xs: '0', md: '2.5vh' } }}>
                                    <Typography variant='h5' sx={{ mb: '2vh' }}>Temat vad "Fusk" vilket man kunde tolka hur man ville. </Typography>
                                    <Typography variant='h5' sx={{ mb: '2vh' }}> Vi ville att man skulle slå in "fusk" med tangentbordet, eller kontrollen, för att låsa upp powerups och dylikt.</Typography>
                                    <Typography variant='h5' sx={{ mb: '2vh' }}>På grund av tidsbrist så hann vi inte få in så mycket i spelet, men ett "fusk" och lite småsaker i alla fall. </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} align='center'>
                                    <CardMedia
                                        component='img'
                                        image={mmTitleScreen}
                                        alt='Titelbild'
                                        sx={{ maxWidth: '30rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6} align='center' sx={{ paddingRight: { xs: '0', md: '1vh' } }}>
                            <CardMedia
                                component='img'
                                image={mmScreen1}
                                alt='Spel nummer 1'
                                sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} align='center' sx={{ paddingLeft: { xs: '0', md: '1vh' } }}>
                            <CardMedia
                                component='img'
                                image={mmScreen2}
                                alt='Korrekt val i spelet'
                                sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} align='center' sx={{ paddingRight: { xs: '0', md: '1vh' } }}>
                            <CardMedia
                                component='img'
                                image={mmScreen3}
                                alt='Bild på spel 2'
                                sx={{ maxWidth: '27rem', size: '100%', mb: '2vh', borderRadius: '15px' }}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <Typography variant='h5' align='center'><strong>Något jag lärde mig under denna processen var att:</strong></Typography>
                            <Typography variant='h5' align='left'>
                                <ul >
                                    <li style={{ marginBottom: '1vh' }}>Hantera stress samtidigt som man samarbetar med någon remote.</li>
                                    <li style={{ marginBottom: '1vh' }}>Rita pixel-art och skriva musik digitalt. (Spelar en del instrument vanligen så är ändå musikalisk enligt min mening)</li>
                                    <li style={{ marginBottom: '1vh' }}>Godot motorn, med GDScript och problemlösning</li>
                                </ul></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5' align='center'>Spelet finns <a href='https://jaerker.itch.io/medieval-malfunction'>här</a> för att testa.</Typography>
                            <Typography variant='h5' align='center' sx={{mt:'1vh', mb:'1vh'}}><strong>Varning för svårighetsgraden och sjukt härlig musik</strong></Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button fullWidth variant='contained' onClick={() => { setAnchorEl(null) }}>GÅ TILLBAKA</Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                )

            default:
                break;
        }
    }




    const btnClick = (e) => {
        setCardInfo(e.target.name);
         setAnchorEl(e.currentTarget)
    }


    const open = Boolean(anchorEl);
    const id = open ? 'popOver' : undefined;
    const popoverPosition = [window.innerWidth / 2, window.innerHeight / 2];

    return (
        <>
            <Grid container spacing={1} align='center' sx={{ mt: '1vh' }}>
                <Grid item xs={12} md={4}>



                    <ProjectCard 
                        logo={lolLekolar}
                        alt='kyckling logga'
                        content='Enklare android spel som jag gjorde till mina barn i Unity.'
                        btnName='lolBtn'
                        btnClick={btnClick}/>
                </Grid>
                <Grid item xs={12} md={4}>


                <ProjectCard 
                        logo={mmLogo}
                        alt='Medieval Malfunction Logga'
                        content='Game jam spel gjort i Godot av mig och kompis.'
                        btnName='mmBtn'
                        btnClick={btnClick}/>

                    
                </Grid>
            </Grid>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    anchorReference='anchorPosition'
                    onClose={() => { setAnchorEl(null);}}
                    anchorPosition={{ top: popoverPosition[1], left: popoverPosition[0] }}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}>
                    <Card>

                        <CardContent>
                            {cardInfo ? (
                                fullCardContent(cardInfo)
                            ):(
                                 <></>
                            )}
                        </CardContent>


                    </Card>

                </Popover>
            </Backdrop>


        </>
    );
}

export default Projects;