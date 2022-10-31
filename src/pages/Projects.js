import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';


const Projects = () => {


    return(
    <>
    <Container>
    <Card align='center' sx={{mt:'1vh'}}>
        <CardContent>
            <Typography variant='h3' gutterBottom>Under konstruktion</Typography>
<Typography paragraph>Denna sidan kommer jag fylla på väldigt snart, men medans ni väntar så kan ni gärna kolla in <a href='https://github.com/Jaerker'> min Github</a>, vilket just nu inte har så mycket skoj tyvärr.</Typography>
<Typography paragraph>På hemsidan här så kan ni skapa ett konto till "blog/post"-API delen, och se lite hur den fungerar. Den är under konstruktion också, men man kan i alla fall skriva posts och sätta upp där.  </Typography>
<Typography paragraph>Jag vet att, med mer tid och möjlighet, så kan jag bygga betydligt bättre och mer än detta också, vilket är svårare att få till när man letar jobb, hjälper till mer hemma med barnen under arbetslösheten och vill ha en bra relation med sin fru.</Typography>
        </CardContent>
    </Card>
    </Container>
    </>
    );
}

export default Projects;