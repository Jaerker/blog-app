
import { AppBar, Toolbar, Typography, Button, Menu, IconButton, MenuItem, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpperRightBtn from './navbar_components/UpperRightBtn';

const Navbar = (props) => {


    const normalPages = [{ tag: 'HOME', url: '/' }, { tag: 'RESUMÉ', url: '/resume' }, { tag: 'PROJECTS', url: '/projects' }];

    const [dropDownBar, setDropDownBar] = useState(null);

    const handleDropDownBarUp = (e) => {
        setDropDownBar(e.currentTarget);
    }

    const handleDropDownBarDown = (e) => {
        setDropDownBar(null);

    }

    const btnClick = (e) => {
        const path = e.target.accessKey;
        if (path === 'logout') {
            window.localStorage.removeItem('JAERKER_BLOG_APP_PORTFOLIO');
            window.location.reload(false);
            return 0;
        }
        window.location.assign('/blog');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography noWrap variant='h6' component='div' sx={{ width: '30rem' }}>
                        Johan Jakberger
                    </Typography>
                    
                    <Grid container sx={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Grid item>
                    {normalPages.map((page) => (

                        <Button component={Link} to={page.url} key={page.tag} sx={{ color: '#fff', marginRight: '1vh' }}>
                            {page.tag}
                        </Button>
                    ))}
                    </Grid>
                    <Grid item>
                    {!props.isInBlogPage && (
                        <UpperRightBtn token={props.values} btnClick={btnClick} />
                    )}
                    </Grid>
                    </Grid>
                </Toolbar>



                <Toolbar sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Typography noWrap variant='h6' component={Link} to='/' sx={{ flexGrow: 1, color: '#FFF', textDecoration:'none' }}>
                        JJ
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleDropDownBarUp}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='dropdown-menu'
                        anchorEl={dropDownBar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        open={Boolean(dropDownBar)}
                        onClose={handleDropDownBarDown}
                        
                    >
                        {normalPages.map((page) => (

                            <MenuItem component={Link} to={page.url} key={page.tag} sx={{ color: '#000', justifyContent:'center'}}>
                                {page.tag}
                            </MenuItem>
                        ))}
                        {!props.isInBlogPage && (
                            <UpperRightBtn token={props.values} btnClick={btnClick} />
                        )}
                    </Menu>


                </Toolbar>
            </AppBar>
        </Box>
    );

};

export default Navbar;