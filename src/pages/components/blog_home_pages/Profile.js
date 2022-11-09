import React, { useState, useEffect } from 'react';


import {
    Container,
    Typography,
    CircularProgress,
    TableContainer,
    Paper,
    TableRow,
    TableCell,
    Table,
    TableBody

} from '@mui/material';



const Profile = (props) => {

    const profileUrl = 'https://blog-api-production-68d6.up.railway.app/api/blog/users';
    //const profileUrl = 'http://localhost:3033/api/blog/users';

    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState(null);

    const convertTime = (value) => {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, scrap] = time.split(':');
        const val = new Date(year, month - 1, day, hour, minute);
        return val.toDateString();
    }


    useEffect(() => {

        const fetchData = async () => {
            fetch(`${profileUrl}/${props.user._id}`, { headers: { 'auth-token': props.token } })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(res => {
                    setProfile(res);

                }).catch(e => {
                    console.error("Error fetching data: ", e);
                }).finally(() => {

                    setLoading(false);

                });
        }

        fetchData().catch(console.error);


    }, []);



    return (<>

        {loading ? (
            <Container sx={{ position: 'fixed', top: '50%', left: '50%' }} >
                <CircularProgress />
            </Container>
        ) : (
            <>

                <Container sx={{ mt: '1vh', maxWidth:{xs:'100%', md:'95%', lg:'72%'} }}>

                    <Typography variant='h2' align='center' gutterBottom >Profile</Typography>

                    <TableContainer component={Paper} sx={{ml:'-1.5vh'}}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1' > Name: </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{fontSize:'120%'}}>{profile.fName} {profile.lName}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1'>Email: </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{fontSize:'120%'}}>{profile.email}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1'>Username: </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{fontSize:'120%'}}>{profile.username}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1'>Account created: </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{fontSize:'120%'}}>{convertTime(profile.date)} </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1'>How many you follow: </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{fontSize:'120%'}}>{profile.friends.length}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1'>How many posts you posted: </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='h6'>{profile.posts.length}</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>






                </Container>



            </>)}
    </>)

}

export default Profile;