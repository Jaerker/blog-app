import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../static/img/logo.png';
import {
  Container,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Tab,
  FormControl,
  CircularProgress,
  Alert,
  Collapse,
  Input

} from '@mui/material';

import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab';

const BlogLogin = () => {

  const dbUrl = 'https://blog-api-production-68d6.up.railway.app/api/auth';
  //const dbUrl = 'http://localhost:3033/api/auth';

  const [alertMsg, setAlertMsg] = useState({
    message: 'Verification mail has ben sent to you!',
    severity: 'success',
    showing: false
  })

  const [value, setValue] = useState('1');

  const [verify, setVerify] = useState({
    fName: "",
    lName: "",
    email: "",
    password: ""
  });
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const [working, setWorking] = useState(false);

  const setAlertTimer = () => {
    setTimeout(() => {
      setAlertMsg((prevValue => {
        return {
          ...prevValue,
          showing: false
        }
      }))
    }, 5000);
  }


  const handleSignUpChange = (event) => {
    const { value, name } = event.target;
    setVerify((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  const handleSignInChange = (event) => {
    const { value, name } = event.target;

    setLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });

  }

  const btnClicked = async (event) => {
    event.preventDefault();

    setWorking(true);

    const { name } = event.target;
    if (name === 'verify') {
      if (verify.password === verify.passwordAgain) {
        delete verify.passwordAgain;
      }
      else {

        setAlertMsg({
          message: 'Passwords are not the same',
          severity: 'warning',
          showing: true
        });

        setAlertTimer();

        setWorking(false);
        return 0;

      }
    }


    //Everything went fine so far, trying to either login or register
    const response = await axios.post(`${dbUrl}/${name}`, eval(name)).then((res) => {


      if (name === 'login') {
        window.localStorage.setItem('JAERKER_BLOG_APP_PORTFOLIO', JSON.stringify(res.data));
        window.location.reload(false);
      }
      else {

        setWorking(false);
        return ['Email verification is sent succesfully, go and verify!', 'success'];
      }
    }).catch((err) => {
      
      return [`Error: ${err.response.data}`, 'warning'];

    });

    if (response) {

      setVerify({
        fName: "",
        lName: "",
        email: "",
        password: ""
      });

      setAlertMsg({
        message: response[0],
        severity: response[1],
        showing: true
      });
      setWorking(false);
    }
    // else{
    //   setWorking(false);
    // }



    setAlertTimer();
  }
  const handleTabChange = (event, newValue) => {
    setValue(newValue);

  }





  return (
    <>
      <Box
        display="flex"
        flexDirection="Column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >



        <Container
          maxWidth='false'
          sx={{
            maxWidth: '40rem',
            textAlign: 'center',
          }}>

          <img src={logo} alt="logo" />
          <Collapse in={alertMsg.showing}>
                      <Alert sx={{mb:'-1rem'}} onClose={() => {
                        setAlertMsg((prevValue) => {
                          return {
                            ...prevValue,
                            showing: false
                          }
                        })
                      }} severity={alertMsg.severity}>{alertMsg.message}</Alert>
                    </Collapse>
          <Card

            sx={{
              textAlign: 'center'
            }}>
            <CardContent>


              <TabContext value={value}>
                <TabList centered onChange={handleTabChange}>
                  <Tab label='Sign In' value='1' />
                  <Tab label='Sign Up' value='2' />

                </TabList>

                <h2>Post API</h2>
                {working ? (
                  <>
                    <h2>Hold up...</h2>
                    <CircularProgress />
                  </>
                ) : (
                  <>
                    
                    <TabPanel value='1'>
                      <Box component='form'>
                        <FormControl onChange={handleSignInChange} sx={{ width: '80%' }} variant='standard'>
                          <TextField required id='signInEmail' name='email' label='Email' variant='standard' value={login.email} />
                          <TextField autoComplete='on' required id='signInPassword' name='password' label='Password' variant='standard' type='password' value={login.password} />
                          <Button type="submit" name='login' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>SIGN IN</Button>
                        </FormControl>
                      </Box>
                    </TabPanel>

                    <TabPanel value='2'>
                      <Box component='form' method='POST'>
                        <FormControl onChange={handleSignUpChange} sx={{ width: '80%' }}>
                          <TextField required id='fName' name='fName' label='First name' variant='standard' value={verify.fName} />
                          <TextField required id='lName' name='lName' label='Last name' variant='standard' value={verify.lName} />
                          <TextField required id='signUpEmail' name='email' label='Email' variant='standard' value={verify.email} />
                          <TextField required id='signUpPassword' name='password' label='Password' variant='standard' type='password' value={verify.password} />
                          <TextField required id='signUpPasswordCheck' name='passwordAgain' label='Re-type Password' variant='standard' type='password' />
                          <Button type="submit" name='verify' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>REGISTER</Button>
                        </FormControl>
                      </Box>
                    </TabPanel>
                  </>
                )}

              </TabContext>
            </CardContent>
          </Card>
        </Container>
      </Box></>);
}

export default BlogLogin;