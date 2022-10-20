
import React, { useState } from 'react';

import BlogLogin from './components/BlogLogin';
import BlogHome from './components/BlogHome';





const BlogPage = () => {

  const [Token, setToken] = useState(JSON.parse(window.localStorage.getItem('JAERKER_BLOG_APP_PORTFOLIO')));

  const {token } = Token;


  return (
    <>

      
    

      {token === null ?
        (
          <BlogLogin />
        )

        :

        (
          <BlogHome />
        )}


    </>
  );


}

export default BlogPage;