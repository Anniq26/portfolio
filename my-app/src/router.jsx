import React from 'react';
import MainPage from './Pages/MainPage';
import LinkLayout from './Layouts/LinkLayout';  // Ensure this path is correct
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Contacts from './Pages/Contacts';
import Bonhotelpg1 from './components/Bonhotelpg1';
import Bonhotelpg2 from './components/Bonhotelpg2';
import Damadamas from './components/Damadamas';

const router = [
    {
        element: <LinkLayout />,
        path: '/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <MainPage />,
                path: '/main',
            },
            {
                element: <AboutMe />,
                path: '/aboutme',
            },
            {
                element: <Portfolio />,
                path: '/portfolio',
            },
            {
                element: <Contacts />,
                path: '/contacts',
            },
            {
                element: <Bonhotelpg1 />,
                path: '/bonhotelpg1',
            },
            {
                element: <Bonhotelpg2 />,
                path: '/bonhotelpg2',
            },
            {
                element: <Damadamas />,
                path: '/damadamas',
            },
        ]
    }
];

export default router;
