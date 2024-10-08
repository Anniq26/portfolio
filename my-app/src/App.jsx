import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import router from "./router";

const App = () => {
  return (
    <div>    
      <RouterProvider router = {createBrowserRouter(router)} />
    </div>
  )
}

export default App