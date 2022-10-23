
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

import Navbar from './pages/components/Navbar';

import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetData } from 'react-helmet-async';
import React, { useState } from 'react';





export default function App() {


  const helmetData = new HelmetData({});

  const [Token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

  const token = Token?.token;

  const user = Token?.user;
 

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
          <Navbar values={{token, user}} isInBlogPage={false} />
          <Home /> </>} />
        <Route path='/blog/*' element={<>
          <Navbar values={{token, user}} isInBlogPage={true} />
          <BlogPage />
        </>} />
        <Route path='/projects' element={<>
          <Navbar values={{token, user}} isInBlogPage={false} />
          <Projects />
        </>} />
        <Route path='/resume' element={<>
          <Navbar values={{token, user}} isInBlogPage={false} />
          <Resume />
        </>} />
      </Routes>


    </>

  );
}


