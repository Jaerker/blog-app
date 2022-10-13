
import React, { useState } from 'react';
import logo from '../static/img/logo.png';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Tab,
  FormControl

} from '@mui/material';

import {
  TabContext,

  TabList,
  TabPanel
} from '@mui/lab';


function BlogLogin() {



  const [value, setValue] = useState('1');

  const [register, setRegister] = useState({
    fName: "",
    lName: "",
    email: "",
    password: ""
  });

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  function handleTabChange(event, newValue) {
    setValue(newValue);

  }

  function handleSignUpChange(event) {
    const { value, name } = event.target;
    setRegister((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }



  function handleSignInChange(event) {
    const { value, name } = event.target;

    setLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });

  }

  async function btnClicked(event) {
    const { name } = event.target;
    if(register.passwordAgain){
      delete register.passwordAgain;
    }

      await axios.post('https://blog-api-production-68d6.up.railway.app/api/auth/'+name, eval(name)).then(res =>{
        console.log(res);
      }, err =>{
        console.log(err.response);
      });
  




  }




  return (
    <Container
      maxWidth='false'
      sx={{
        maxWidth: '40rem',
        textAlign: 'center',
        marginLeft: '1rem',
        marginRight: '1rem'
      }}>
      <img src={logo} alt="logo" />
      <Card

        sx={{
          textAlign: 'center'
        }}>
        <CardContent>

          <TabContext value={value}>
            <TabList centered onChange={(handleTabChange)}>
              <Tab label='Sign In' value='1' />
              <Tab label='Sign Up' value='2' />

            </TabList>

            <h2>Post API</h2>
            <TabPanel value='1'>
              <FormControl onChange={handleSignInChange} sx={{width:'75%'}}>
                <TextField id='signInEmail' name='email' label='Email' variant='standard' value={login.email} />
                <TextField id='signInPassword' name='password' label='Password' variant='standard' type='password' value={login.password} />
                <Button name='login' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>SIGN IN</Button>
              </FormControl>
            </TabPanel>
            <TabPanel value='2'>
              <FormControl onChange={handleSignUpChange} sx={{width:'75%'}}>
                <TextField id='fName' name='fName' label='First name' variant='standard' value={register.fName} />
                <TextField id='lName' name='lName' label='Last name' variant='standard' value={register.lName} />
                <TextField id='signUpEmail' name='email' label='Email' variant='standard' value={register.email} />
                <TextField id='signUpPassword' name='password' label='Password' variant='standard' type='password' value={register.password} />
                <TextField id='signUpPasswordCheck' name='passwordAgain' label='Re-type Password' variant='standard' type='password' />
                <Button name='register' color='primary' size='large' onClick={btnClicked} variant='contained' style={{ marginTop: '3vh' }}>REGISTER</Button>
              </FormControl>
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </Container>
  );
}

export default BlogLogin;