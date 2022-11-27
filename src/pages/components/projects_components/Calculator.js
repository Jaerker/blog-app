import { Button, Card, CardContent, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';


const button = () => {

}





const Calculator = () => {


    const numBtnValues = {
        width:'30%',
        display:'flex',
    }

    const sideBtnValues = {
        display:'flex',
        width:'50%' 
    }

    document.addEventListener('keydown', e => {
        setOutput(output + e.key)
    });


    const [output, setOutput] = useState('');
    const [input, setInput] = useState('');


    return (
        <>
        <Container sx={{minWidth: 500, minHeight: 500}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{border:'1px solid gray', borderRadius:'3px'}}>
                    <TextField variant='standard' disabled fullWidth value={output}/>
                    <TextField variant='standard' disabled fullWidth value={output} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <TextField disabled fullWidth />
                </Grid>
            </Grid>


            <Grid container sx={{ mt: '3vh', justifyContent:'center'}} spacing={1}>

                <Grid container direction='column' item xs={6} sx={{height:'300px'}} alignItems='center' spacing={1}>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained' color='error'>X</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={numBtnValues}>
                        <Button fullWidth variant='contained'>5</Button>
                    </Grid>
                    
                </Grid>

                <Grid container wrap='wrap' direction='column' item xs={4} sx={{height:'300px'}} justifyContent='center' spacing={1}>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>1</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>2</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>3</Button>
                    </Grid>
                    <Grid item xs={4.8} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>4</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>6</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>7</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>8</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>9</Button>
                    </Grid>
                    <Grid item xs={2.4} sx={sideBtnValues}>
                        <Button fullWidth variant='contained'>0</Button>
                    </Grid>

                </Grid>

            </Grid>
            </Container>

        </>
    )
}


export default Calculator;