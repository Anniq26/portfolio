import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Ani Kitoshvili</title>
        <link rel="icon" href="/logoV2.png" />
        <link rel="apple-touch-icon" href="/logoV2.png" /> {/* Optional */}
        <link rel="icon" href="%PUBLIC_URL%/logoV2.png" />
      </Helmet>
      
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
