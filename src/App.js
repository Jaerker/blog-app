
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Box} from '@mui/material';
import {Helmet, HelmetData} from 'react-helmet-async';



function App() {

  const helmetData = new HelmetData({});
  return (
    <Box 
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    >

        <Helmet helmetData={helmetData}>
          <title>Jaerkers Resumé</title>
          <style>{'body { background-color: #3c344c; }'}</style>
        </Helmet>
                
      <Login />
    </Box>

  );
}

export default App;
