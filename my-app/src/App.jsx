import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';
import { Helmet } from 'react-helmet';  // Import Helmet

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Ani Kitoshvili</title>
        <link rel="icon" href="/logoV2.png" />
      </Helmet>
      
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
