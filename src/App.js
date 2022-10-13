
import BlogLogin from './pages/BlogLogin';
import Home from './pages/Home';
import Resume from './pages/Resume';
import {Routes, Route} from 'react-router-dom';
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
                

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blog' element={<BlogLogin />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </Box>

  );
}

export default App;
