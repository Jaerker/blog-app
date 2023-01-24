
import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Tree from './Tree';

// node test: 
// const equation = '5+6x8+20/4-3.8²+√9+15%';

const Calculator = () => {

    const [tree, setTree] = useState(new Tree());
    const [output, setOutput] = useState('0');
    const [input, setInput] = useState('0');
    const [calculation, setCalculation] = useState('');
    const [numbers, setNumbers] = useState([]);
    const [operators, setOperators] = useState([]);



    const numberBtn = (event) => {
        const { name } = event.currentTarget;
        

        console.log(`numbers: ${numbers.length}, operators: ${operators.length}`);

        if (input === '0') {
            if (name === '.') {
                setInput('0.');
                setCalculation('0.');
            } else {
                setInput(name);
                setCalculation(name);
            }
        }
        else {
            //Decimal point
            if (name === '.') {
                if (numbers[numbers.length - 1] === '' || numbers.length === operators.length) {
                    setInput((prevValue) => {
                        return prevValue + '0.';
                    });
                    setCalculation((prevValue) => {
                        return prevValue + '0.';
                    });
                }
                else if (!/[.]/.test(numbers[numbers.length - 1])) {
                    setInput((prevValue) => {
                        return prevValue + name;
                    });
                }
            }
            //Numbers
            else {
                if (!/[%²]/.test(numbers[numbers.length - 1]) || numbers.length === operators.length)
                    if (numbers[numbers.length - 1] === '0') {

                        if (numbers.length === operators.length) {
                            setInput((prevValue) => {
                                return prevValue.slice(0, prevValue.length - 2) + name;
                            });
                        }
                        else {
                            setInput((prevValue) => {
                                return prevValue.slice(0, prevValue.length - 1) + name;
                            });
                        }
                    }
                    else {
                        setInput((prevValue) => {
                            return prevValue + name;
                        });
                    }
            }
        }
    }

    const operatorBtn = (event) => {
        const { name } = event.currentTarget;


        if (numbers.length > operators.length) {
            setInput((prevValue) => {
                return prevValue + name;
            });
        }
        else {
            setInput((prevValue) => {
                return prevValue.slice(0, prevValue.length - 1) + name;
            });
        }

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
        }
    }



    const sumBtn = () => {

        //If they are the same length, it ended with an operator. It will be removed here
        if (numbers.length === operators.length) {
            setOperators((prevValue) => {
                return prevValue.pop();
            });
            
        }


    //     try{
    //     //Prio1 = ², √ and %
    //     //CalculationIndex holds the index for the first part of the equation that needs to be done so we can go to next step.
    //     setCalculationIndex(numbers.findIndex((element) => { return /[²√%]/.test(element) }));

    //     while (calculationIndex !== -1) {

    //         let value = numbers[calculationIndex];
    //         if (/[²]/.test(value)) {
    //             value = value.slice(0, value.length - 1);
    //             let num = parseFloat(value) * parseFloat(value);
    //             setNumbers((prevValue) =>{
    //                 prevValue[calculationIndex] = num;
    //                 return prevValue;
    //             });
    //         }
    //         if (/[%]/.test(value)) {
    //             value = value.slice(0, value.length - 1);
    //             let num = parseFloat(value);
    //             numbers[calculationIndex] = (num / 100);
    //         }
    //         if (/[√]/.test(value)) {
    //             value = numbers[calculationIndex].slice(1, numbers[calculationIndex].length);
    //             let num = parseFloat(value);
    //             numbers[calculationIndex] = Math.sqrt(num);
    //         }


    //         setCalculationIndex(numbers.findIndex((element) => { return /[²√%]/.test(element) }));


    //     }

    //     /*Prio2 = x and / 
    //     Same logic as before, but now we do the comparison on the operation side instead.          
    //     */

    //     setCalculationIndex(operators.findIndex((element) => { return /[x/]/.test(element) }));

    //     while (calculationIndex !== -1) {

    //         if (operators[calculationIndex] === 'x') {
    //             numbers[calculationIndex] = numbers[calculationIndex] * numbers[calculationIndex + 1]
    //         }
    //         else if (operators[calculationIndex] === '/') {
    //             numbers[calculationIndex] = numbers[calculationIndex] / numbers[calculationIndex + 1]
    //         }

    //         let firstPart = numbers.slice(0, calculationIndex);
    //         let lastPart = numbers.slice(calculationIndex + 1);
    //         numbers = firstPart.concat(lastPart);

    //         firstPart = operators.slice(0, calculationIndex);
    //         lastPart = operators.slice(calculationIndex + 1);
    //         operators = firstPart.concat(lastPart);

    //         setCalculationIndex(operators.findIndex((element) => { return /[x/]/.test(element) }));

    //     }


    //     //Prio 3 = + -
    //     for (let index = 0; index < operators.length; index++) {
    //         const operator = operators[index];
    //         if(operator === '+'){
    //             numbers[index+1] = numbers[index] + numbers[index+1];
    //         }
    //         else if(operator === '-'){
    //             numbers[index+1] = numbers[index] - numbers[index+1];
    //         }
    //         numbers.slice(index+1);
    //         operators.slice(index+1);
    //         index -=1;
            
    //     }
    //     setOutput(numbers[0]);

    // }catch(e){
    //     console.log(e);
    // }
    setNumbers((prevValue) =>{
        prevValue[2] = 'num';
        return prevValue;
    });


        // while(calculationIndex !== -1){

        //     if(operators[calculationIndex] === '+'){
        //     numbers[calculationIndex] = numbers[calculationIndex] + numbers[calculationIndex+1]
        //     }
        //     else if(operators[calculationIndex] === '-'){
        //     numbers[calculationIndex] = numbers[calculationIndex] - numbers[calculationIndex+1]
        //     }
        //     let firstPart = numbers.slice(0, calculationIndex);
        //     let lastPart = numbers.slice(calculationIndex+1);
        //     numbers = firstPart.concat(lastPart);

        //     firstPart = operators.slice(0, calculationIndex);
        //     lastPart = operators.slice(calculationIndex+1);
        //     operators = firstPart.concat(lastPart);

        // }


    }

    /*
    if (numberArray[numberArray.length - 1] === '') {
            numberArray.pop();
            operatorArray.pop();
        }
        let prio3Index = numberArray.findIndex((element) => { return /[²√%]/.test(element) })

        while (prio3Index !== -1) {
            let value = numberArray[prio3Index];

            if (/[²]/.test(value)) {

                let num = parseFloat(value.slice(0, value.length - 1));
                numberArray[prio3Index] = num * num;
            }
            else if (/[√]/.test(value)) {

                numberArray[prio3Index] = Math.sqrt(parseFloat(value.slice(1)));
            }
            else {
                value.slice(0, value.length - 1);
                let num = parseFloat(value);
                numberArray[prio3Index] = (num / 100);
            }


            prio3Index = numberArray.findIndex((element) => { return /[²√%]/.test(element) })
        }

        setOutput(numberArray);
     */



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
                            <Button onClick={deletionBtn} name='backspace' fullWidth variant='contained' color='error'>←</Button>
                        </Grid>
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
                            <Button onClick={deletionBtn} name='delete' fullWidth variant='contained' color='error'>del</Button>
                        </Grid>
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