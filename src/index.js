import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material';
import Home from './Pages/Home/Home.jsx'
import Bookings from './Pages/Bookings/Bookings.jsx'
import Search from './Pages/Search/Search.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children:[
    {
      path: 'search',
      element: <Search/>
    },
    {
      path: 'my-bookings',
      element: <Bookings/>
    },
    {
      path: '/',
      element: <Home/>
    },

  ]
}
]);

export const theme= createTheme({
  typography:{fontFamily:"Poppins , sans-serif",}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
