import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../static/img/logo.png';
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Tab,
  FormControl,
  CircularProgress,
  Alert,
  Collapse

} from '@mui/material';

import {
  TabContext,

  TabList,
  TabPanel
} from '@mui/lab';

const BlogLogin = () => {

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
    const response = await axios.post(`https://blog-api-production-68d6.up.railway.app/api/auth/${name}`, eval(name)).then((res) => {

      if (name === 'login') {
        window.localStorage.setItem('JAERKER_BLOG_APP_PORTFOLIO', JSON.stringify(res.data));
        window.location.reload(false);
      }
      else {

        setWorking(false);
        return true;
      }
    }).catch((err) => {
      setWorking(false);
      setAlertMsg({
        message: `Error: ${err.response.data}`,
        severity: 'warning',
        showing: true
      });
      return false;

    });

    if (response) {

      setVerify({
        fName: "",
        lName: "",
        email: "",
        password: ""
      });

      setAlertMsg({
        message: 'Email verification is sent succesfully, go and verify!',
        severity: 'success',
        showing: true
      });
    }



    setAlertTimer();
  }
  const handleTabChange = (event, newValue) => {
    setValue(newValue);

  }





  return (
    <>
      <Collapse in={alertMsg.showing}>
        <Alert onClose={() => {
          setAlertMsg((prevValue) => {
            return {
              ...prevValue,
              showing: false
            }
          })
        }} severity={alertMsg.severity}>{alertMsg.message}</Alert>
      </Collapse>


      <Container
        maxWidth='false'
        sx={{
          maxWidth: '40rem',
          textAlign: 'center',
        }}>

        <img src={logo} alt="logo" />
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
                    <FormControl onChange={handleSignInChange} sx={{ width: '80%' }}>
                      <TextField id='signInEmail' name='email' label='Email' variant='standard' value={login.email} />
                      <TextField id='signInPassword' name='password' label='Password' variant='standard' type='password' value={login.password} />
                      <Button name='login' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>SIGN IN</Button>
                    </FormControl>
                  </TabPanel>

                  <TabPanel value='2'>
                    <FormControl onChange={handleSignUpChange} sx={{ width: '80%' }}>
                      <TextField id='fName' name='fName' label='First name' variant='standard' value={verify.fName} />
                      <TextField id='lName' name='lName' label='Last name' variant='standard' value={verify.lName} />
                      <TextField id='signUpEmail' name='email' label='Email' variant='standard' value={verify.email} />
                      <TextField id='signUpPassword' name='password' label='Password' variant='standard' type='password' value={verify.password} />
                      <TextField id='signUpPasswordCheck' name='passwordAgain' label='Re-type Password' variant='standard' type='password' />
                      <Button type="submit" name='verify' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>REGISTER</Button>
                    </FormControl>
                  </TabPanel>
                </>
              )}

            </TabContext>
          </CardContent>
        </Card>
      </Container>
    </>);
}

export default BlogLogin;