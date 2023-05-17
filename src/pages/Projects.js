import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Popover, Backdrop, Grid, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material';
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

import shipLogo from '../static/img/ship.jpg';

//import calculatorLogo from '../static/img/calculator.png';
//import calculatorLogoSmall from '../static/img/calculatorSmall.png';

import ProjectCard from './components/projects_components/ProjectCard';
import Calculator from './components/projects_components/Calculator';


//<Grid item xs={12} md={6}></Grid>

class HarborItem {
    constructor(_country, _cargoImport = '0', _cargoExport = '0') {
        this.country = _country;
        this.cargoImport = _cargoImport;
        this.cargoExport = _cargoExport;

    }
}

class HarborList {
    constructor() {
        this.root = {
            list: []
        };
    }

    AddCountry(_country, _year, _cargoImport, _cargoExport) {
        let item = new HarborItem(_country, _cargoImport, _cargoExport);

        if (this.root.list.length < 0 || !this.root.list.find(x => x.year === _year)) {
            this.root.list.push({ year: _year, cargoInfo: [item] });
        }
        else {
            this.root.list[this.root.list.findIndex((x) => x.year === _year)].cargoInfo.push(item);
        }

    }
    async Sort() {

        const countryNames =
        {
            abbreviations: [],
            fullLengthNames: [],
        };


        fetch('https://api.scb.se/OV0104/v1/doris/sv/ssd/HA/HA0201/HA0201A/OImpExpLandTotAr').then((response) => response.json()).then((data) => {
            countryNames.abbreviations = data.variables[0].values;
            countryNames.fullLengthNames = data.variables[0].valueTexts;
        }).then(() => {
            const newRootList = [];

            this.root.list.forEach(i => {
                let _highestExportValue = new HarborItem('', '', '');
                let _highestImportValue = new HarborItem('', '', '');

                i.cargoInfo.forEach(j => {
                    j.country = countryNames.fullLengthNames[countryNames.abbreviations.findIndex(x => x === j.country)];
                    if (Number(j.cargoImport) > Number(_highestImportValue.cargoImport)) {
                        _highestImportValue = j;
                    }
                    if (Number(j.cargoExport) > Number(_highestExportValue.cargoExport)) {
                        _highestExportValue = j;
                    }
                });
                newRootList.push({ year: i.year, highestExportValue: _highestExportValue, highestImportValue: _highestImportValue });
            })
            this.root = newRootList;
        })
        return this.root;



    }
}




const Projects = () => {

    //Hamnkodsvariabler 
    const [loading, setLoading] = useState(true);
    const [harborInfo, setHarborInfo] = useState(null);

    const harborUrl = 'https://api.scb.se/OV0104/v1/doris/sv/ssd/HA/HA0201/HA0201A/OImpExpLandTotAr';
    const requestBody = {
        "query": [
            {
                "code": "Tid",
                "selection": {
                    "filter": "item",
                    "values": [
                        "2002",
                        "2003",
                        "2004",
                        "2005",
                        "2006",
                        "2007",
                        "2008",
                        "2009",
                        "2010",
                        "2011",
                        "2012",
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                        "2022"
                    ]
                }
            },
            {
                "code": "Handelspartner",
                "selection": {
                    "filter": "item",
                    "values": [
                        "AF",
                        "AL",
                        "DZ",
                        "VI",
                        "XA",
                        "AS",
                        "AD",
                        "AO",
                        "AI",
                        "AQ",
                        "AG",
                        "AR",
                        "AM",
                        "AW",
                        "AU",
                        "XO",
                        "AZ",
                        "BS",
                        "BH",
                        "BD",
                        "BB",
                        "BY",
                        "BE",
                        "LX",
                        "BZ",
                        "BJ",
                        "BM",
                        "BT",
                        "BO",
                        "BQ",
                        "BA",
                        "BW",
                        "BV",
                        "BR",
                        "IO",
                        "VG",
                        "BN",
                        "BG",
                        "QS",
                        "QR",
                        "QQ",
                        "BF",
                        "BI",
                        "KY",
                        "CF",
                        "XC",
                        "CL",
                        "CO",
                        "CK",
                        "CR",
                        "CW",
                        "CY",
                        "DK",
                        "TF",
                        "CD",
                        "QP",
                        "DJ",
                        "DM",
                        "DO",
                        "EC",
                        "EG",
                        "QU",
                        "GQ",
                        "SV",
                        "CI",
                        "ER",
                        "EE",
                        "SZ",
                        "ET",
                        "QV",
                        "FK",
                        "FJ",
                        "PH",
                        "FI",
                        "FR",
                        "GF",
                        "PF",
                        "FO",
                        "AE",
                        "GB",
                        "US",
                        "UM",
                        "GA",
                        "GM",
                        "GE",
                        "GH",
                        "GI",
                        "GR",
                        "GD",
                        "GL",
                        "GP",
                        "GU",
                        "GT",
                        "GN",
                        "GW",
                        "GY",
                        "HT",
                        "HM",
                        "VA",
                        "HN",
                        "HK",
                        "QW",
                        "IN",
                        "ID",
                        "IQ",
                        "IR",
                        "IE",
                        "IS",
                        "IL",
                        "IT",
                        "JM",
                        "JP",
                        "YE",
                        "JO",
                        "CX",
                        "KH",
                        "CM",
                        "CA",
                        "XB",
                        "CV",
                        "KZ",
                        "KE",
                        "CN",
                        "KG",
                        "KI",
                        "CC",
                        "QX",
                        "QY",
                        "QZ",
                        "KM",
                        "CG",
                        "XK",
                        "HR",
                        "CU",
                        "KW",
                        "LA",
                        "LS",
                        "LV",
                        "LB",
                        "LR",
                        "LY",
                        "LI",
                        "LT",
                        "LU",
                        "MO",
                        "MG",
                        "MW",
                        "MY",
                        "MV",
                        "ML",
                        "MT",
                        "MA",
                        "MH",
                        "MQ",
                        "MR",
                        "MU",
                        "YT",
                        "XL",
                        "MX",
                        "FM",
                        "MZ",
                        "MD",
                        "MN",
                        "ME",
                        "MS",
                        "MM",
                        "NA",
                        "NR",
                        "NL",
                        "AN",
                        "NP",
                        "NI",
                        "NE",
                        "NG",
                        "NU",
                        "KP",
                        "MK",
                        "MP",
                        "NF",
                        "NO",
                        "NC",
                        "NZ",
                        "XZ",
                        "OM",
                        "PK",
                        "PW",
                        "PS",
                        "PA",
                        "PG",
                        "PY",
                        "PE",
                        "PN",
                        "XR",
                        "PL",
                        "PT",
                        "QA",
                        "RE",
                        "RO",
                        "RW",
                        "RU",
                        "KN",
                        "LC",
                        "VC",
                        "BL",
                        "PM",
                        "SB",
                        "WS",
                        "SM",
                        "SH",
                        "ST",
                        "SA",
                        "CH",
                        "SN",
                        "RS",
                        "CS",
                        "SC",
                        "SL",
                        "SG",
                        "SX",
                        "SK",
                        "SI",
                        "SO",
                        "ES",
                        "LK",
                        "SD",
                        "SR",
                        "ZA",
                        "GS",
                        "KR",
                        "SS",
                        "SY",
                        "TJ",
                        "TW",
                        "TZ",
                        "TD",
                        "TH",
                        "CZ",
                        "TG",
                        "TK",
                        "TO",
                        "TT",
                        "TN",
                        "TR",
                        "TM",
                        "TC",
                        "TV",
                        "DE",
                        "UG",
                        "UA",
                        "HU",
                        "UY",
                        "UZ",
                        "WF",
                        "VU",
                        "VE",
                        "VN",
                        "XP",
                        "EH",
                        "ZM",
                        "ZW",
                        "AT",
                        "TL"
                    ]
                }
            },
            {
                "code": "ContentsCode",
                "selection": {
                    "filter": "Item",
                    "values": [
                        "HA0201J8",
                        "HA0201J9"
                    ]
                }
            }
        ],
        "response": {
            "format": "json"
        }
    };
    useEffect(() => {
        if (!harborInfo) {
            fetchData().catch((e) => { console.error(e.message) });
        }
    });
    const fetchData = async () => {
        setLoading(true);
        await fetch(harborUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),

        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
            .then((data) => {
                let hl = new HarborList();
                data.data.forEach(element => {
                    hl.AddCountry(element.key[0], element.key[1], element.values[0], element.values[1]);
                });
                hl.Sort().then(() => { setHarborInfo(hl); })


            }).finally(() => {
                setLoading(false);
            });
    }
    //Slut på hamnkodsvariabler
    
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
                </Grid>
                )

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
                            <Typography variant='h5' align='center' sx={{ mt: '1vh', mb: '1vh' }}><strong>Varning för svårighetsgraden och sjukt härlig musik</strong></Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button fullWidth variant='contained' onClick={() => { setAnchorEl(null) }}>GÅ TILLBAKA</Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                )

            case 'calcBtn':
                return (<Calculator />)
//Hamnkodslogik
            case 'harborTableBtn':
                return (
                    <>
                        
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="Harbor Table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align='center' sx={{ fontWeight: '600', fontSize: '1.7vh', border: '1px solid black' }} >År</TableCell>
                                                <TableCell align='center' sx={{ fontWeight: '600', fontSize: '1.7vh', borderTop: '1px solid black', borderBottom: '1px solid black' }}>Land</TableCell>
                                                <TableCell align='center' sx={{ fontWeight: '600', fontSize: '1.7vh', borderRight: '1px solid black', borderTop: '1px solid black', borderBottom: '1px solid black' }}>Import(TKR)</TableCell>
                                                <TableCell align='center' sx={{ fontWeight: '600', fontSize: '1.7vh', borderTop: '1px solid black', borderBottom: '1px solid black' }}>Land</TableCell>
                                                <TableCell align='center' sx={{ fontWeight: '600', fontSize: '1.7vh', borderRight: '1px solid black', borderTop: '1px solid black', borderBottom: '1px solid black' }}>Export(TKR)</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {harborInfo.root.map((row) => (
                                                <TableRow key={row.year}>
                                                    <TableCell sx={{ fontWeight: '600', fontSize: '1.3vh', borderRight: '1px solid black', borderLeft: '1px solid black' }} align='center'>
                                                        {row.year}
                                                    </TableCell>
                                                    <TableCell align='center' sx={{ fontSize: '1.3vh' }}>{row.highestImportValue.country}</TableCell>
                                                    <TableCell align='right'  sx={{ fontSize: '1.3vh', borderRight: '1px solid black' }}>{Number(row.highestImportValue.cargoImport).toLocaleString()}</TableCell>
                                                    <TableCell align='center' sx={{ fontSize: '1.3vh' }}>{row.highestExportValue.country}</TableCell>
                                                    <TableCell align='right'  sx={{ fontSize: '1.3vh', borderRight: '1px solid black' }}>{Number(row.highestExportValue.cargoExport).toLocaleString()}</TableCell>


                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                </TableContainer>


                            


                    </>);


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
                        btnClick={btnClick} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <ProjectCard
                        logo={mmLogo}
                        alt='Medieval Malfunction Logga'
                        content='Game jam spel gjort i Godot av mig och kompis.'
                        btnName='mmBtn'
                        btnClick={btnClick}
                    />
                </Grid>

                {/* egen specifik funktion för hamnkodskortet som visas, lite onödigt gjord men fungerar. Finns många bättre sätt att göra det på nu i efterhand. */}
                {loading ? (<Grid item xs={12} md={4}>
                    <Container>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 250, height: 500 }}>
                            <CardMedia
                                component='img'

                                image={shipLogo}
                                alt='Harbor Table Test'
                            />
                            <CardContent>
                                <Typography variant='subtitle1'>Laddar...</Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', alignItems: 'end', }}>
                                <Button variant='outlined' fullWidth disabled>Laddar...</Button>

                            </CardActions>
                        </Card>
                    </Container>
                </Grid>) : (
                    <Grid item xs={12} md={4}>
                        <ProjectCard
                            logo={shipLogo}
                            alt='Harbor table test'
                            content='API anrop test'
                            btnName='harborTableBtn'
                            btnClick={btnClick}
                            loading={loading} />
                    </Grid>
                )}


                {/* <Grid item xs={12} md={4}>
                <ProjectCard 
                        logo={calculatorLogo}
                        alt='Kalkylator'
                        content='Enkel kalkylator gjord i React'
                        btnName='calcBtn'
                        btnClick={btnClick}/>
                </Grid> */}
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
                    onClose={() => { setAnchorEl(null); }}
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
                            ) : (
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
