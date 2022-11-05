import { Alert, Collapse, Container } from '@mui/material';
import React from 'react';

const AlertMessage = (props) => {




    return (
        <Container align='center' sx={{ mt: '2vh' }}>
            <Collapse in={props.alertMsg.showing} sx={{ ml: { xs: '1vh', md: '20%' }, mr: { xs: '1vh', md: '20%' }, mb: '1vh' }}>
                <Alert onClose={() => {
                    props.setAlertMsg((prevValue) => {
                        return {
                            ...prevValue,
                            showing: false
                        }
                    })
                }} severity={props.alertMsg.severity} >{props.alertMsg.message} </Alert>
            </Collapse>
        </Container>
    );
}

export default AlertMessage;

/**
 * Functions and variables you need right now if you are using this: 
 * 
//        const [alertMsg, setAlertMsg] = useState({
//         message: 'Verification mail has ben sent to you!',
//         severity: 'success',
//         showing: false
//     });
//    
//        const setAlertTimer = () => {
//         setTimeout(() => {
//             setAlertMsg((prevValue => {
//                 return {
//                     ...prevValue,
//                     showing: false
//                 }
//             }))
//         }, 5000);
//     }
 * 
 */