import React from 'react';

import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';



const UpperRightBtn = (props) => {

    const secretPages = [{ tag: 'LOGIN', url: 'login' }, { tag: 'LOGOUT', url: 'logout' }];


    return (
        <>

            {props.token ? (

                <Grid container sx={{ flexDirection: { xs: 'column', md: 'row-reverse' }, alignItems: { xs: 'center' } }} >

                    <Grid item>
                        <Button variant='contained' onClick={()=>{props.dropDownBar()}} component={Link} to='/blog' sx={{ marginRight: { xs: '0', md: '1vh' }, marginTop: { xs: '5px', md: '0' }, backgroundColor: '#fff', color: '#000' }}> 
                        Blog API
                        </Button>
                    </Grid>

                </Grid>



            ) : (
                <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center' } }}>
                    <Grid item>
                        <Button variant='contained' onClick={()=>{props.dropDownBar()}} component={Link} to='/blog' sx={{ backgroundColor: '#fff', color: '#000', marginRight: { xs: '0', md: '1vh' }, marginTop: { xs: '5px', md: '0' } }}>
                            {secretPages[0].tag}
                        </Button>
                    </Grid>
                </Grid>


            )}

        </>
    )
}

export default UpperRightBtn;