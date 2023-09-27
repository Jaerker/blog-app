
import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Tree from './Tree';

// node test: 
// const equation = '5+6x8+20/4-3.8²+√9+15%';

const Calculator = () => {

    const [currentInput, setCurrentInput] = useState('0');
    const [tree, setTree] = useState(new Tree());
    const [output, setOutput] = useState('0');
    const [input, setInput] = useState('0');
    const [calculation, setCalculation] = useState('');
    const [numbers, setNumbers] = useState([]);
    const [operators, setOperators] = useState([]);

useEffect(()  =>{
    setInput(currentInput)
}, [currentInput]);

    const numberBtn = (event) => {
        const thisInput = event.currentTarget.name;
        
        //Kolla decimal och liknande.
        console.log(thisInput);

        setCurrentInput((prevValue) => {   
            if(thisInput === '.'){
                if(!currentInput.includes('.')){
                    if(currentInput !== '0'){
                        return prevValue + thisInput;
                    }
                    else{
                        return '0.';
                    }
                }
                else{
                    return prevValue;
                }
                
                
            }
            
            if(currentInput === '0'){
                return thisInput;
            }
            else{
                return prevValue +thisInput;
            }
        });



    }

    const operatorBtn = (event) => {
        
    }

    const squaredOrPercentBtn = (event) => {
        const { name } = event.currentTarget;

        if ((input !== '0' && numbers.length === 0) || (input !== '0' && !/[%²]/.test(numbers[numbers.length - 1]))) {
            if (numbers[numbers.length - 1] !== '0') {
                if (numbers.length === operators.length + 1) {
                    setInput((prevValue) => {
                        return prevValue + name;
                    });
                }
            }
        }



    }

    const squareRootBtn = () => {

        if (numbers[numbers.length - 1] === '0') {
            setInput((prevValue) => {
                return prevValue.slice(0, prevValue.length - 1) + '√';
            })
        }
        if (numbers.length === operators.length) {
            setInput((prevValue) => {
                return prevValue + '√';
            });
        }

    }

    const deletionBtn = (event) => {
        const { name } = event.currentTarget;

        if (name === 'backspace') {
            setInput((prevValue) => {
                if (prevValue.length === 1) return '0';
                return prevValue.slice(0, prevValue.length - 1);
            });
        }
        if (name === 'delete') {
            setInput('0');
            setOutput('0');
            setCurrentInput('0');
        }
    }



    const sumBtn = () => {

}



    const numBtnValues = {
        width: '30%',
        display: 'flex',
    }

    const sideBtnValues = {
        display: 'flex',
        width: '50%'
    }





    return (
        <>
            <Container sx={{ minWidth: 500, minHeight: 500 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ border: '1px solid gray', borderRadius: '3px' }}>
                            <TextField variant='standard' disabled fullWidth value={output} />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField disabled fullWidth value={input} />
                    </Grid>
                </Grid>


                <Grid container sx={{ mt: '3vh', justifyContent: 'center' }} spacing={1}>

                    <Grid container direction='column' item xs={6} sx={{ height: '300px' }} alignItems='center' spacing={1}>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            {//<Button onClick={deletionBtn} name='backspace' fullWidth variant='contained' color='error'>←</Button>
}</Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='7' fullWidth variant='contained'>7</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='4' fullWidth variant='contained'>4</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='1' fullWidth variant='contained'>1</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='.' fullWidth variant='contained'>.</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            {
                            //<Button onClick={deletionBtn} name='delete' fullWidth variant='contained' color='error'>del</Button>
                            }</Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='8' fullWidth variant='contained'>8</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='5' fullWidth variant='contained'>5</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='2' fullWidth variant='contained'>2</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='0' fullWidth variant='contained'>0</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='9' fullWidth variant='contained'>9</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='6' fullWidth variant='contained'>6</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={numberBtn} name='3' fullWidth variant='contained'>3</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={numBtnValues}>
                            <Button onClick={squaredOrPercentBtn} name='%' fullWidth variant='contained'>%</Button>
                        </Grid>

                    </Grid>

                    <Grid container wrap='wrap' direction='column' item xs={4} sx={{ height: '300px' }} justifyContent='center' spacing={1}>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                            <Button onClick={operatorBtn} name='/' fullWidth variant='contained'>/</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                            <Button onClick={operatorBtn} name='x' fullWidth variant='contained'>x</Button>
                        </Grid>
                        <Grid item xs={4.8} sx={sideBtnValues}>
                            <Button onClick={sumBtn} name='equals' fullWidth variant='contained'>=</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                            <Button onClick={squareRootBtn} name='√' fullWidth variant='contained'>√</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                            <Button onClick={squaredOrPercentBtn} name='²' fullWidth variant='contained'>x²</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                            <Button onClick={operatorBtn} name='-' fullWidth variant='contained'>-</Button>
                        </Grid>
                        <Grid item xs={2.4} sx={sideBtnValues}>
                            <Button onClick={operatorBtn} name='+' fullWidth variant='contained'>+</Button>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>

        </>
    )
}


export default Calculator;