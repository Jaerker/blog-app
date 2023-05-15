import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const HarborTable = () => {

    const [loading, setLoading] = useState(true);
    const [harborInfo, setHarborInfo] = useState(null);

    const HarborUrl = 'https://api.scb.se/OV0104/v1/doris/sv/ssd/HA/HA0201/HA0201A/OImpExpLandTotAr';
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
        fetchData().catch((console.error));

    }, []);


    const fetchData = async () => {



        await fetch(HarborUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-type': 'application/json;',
            },
        }).then((response) => response.json())
            .then((data) => {
                setHarborInfo(data);
            });

            console.log(harborInfo);
        setLoading(false);

    }










    return (
        <>
            {loading ? (
                <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                    <CircularProgress />
                </Container>
            ) : (

                <Container>


                    <Typography align='center' variant='h2'>Information</Typography>



                </Container>)}

        </>)
}

export default HarborTable;