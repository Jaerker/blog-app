
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

import Navbar from './pages/components/Navbar';

import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetData } from 'react-helmet-async';
import React, { useState } from 'react';



function App() {

  const helmetData = new HelmetData({});

  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));



  return (
    <>


      <Helmet helmetData={helmetData}>
        <title>Jaerkers Resumé</title>
        <style>{`body { 
            background-color: #3c344c;
            }`}</style>
      </Helmet>


      <Routes>
        <Route path='/' element={<>
          <Navbar values={token} isInBlogPage={false} />
          <Home /> </>} />
        <Route path='/blog' element={<>
          <Navbar values={token} isInBlogPage={true} />
          <BlogPage />
        </>} />
        <Route path='/projects' element={<>
          <Navbar values={token} isInBlogPage={false} />
          <Projects />
        </>} />
        <Route path='/resume' element={<>
          <Navbar values={token} isInBlogPage={false} />
          <Resume />
        </>} />
      </Routes>


    </>

  );
}

export default App;
