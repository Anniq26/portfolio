import React from 'react';
import MainPage from './Pages/MainPage';
import LinkLayout from './Layouts/LinkLayout';  // Ensure this path is correct
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Contacts from './Pages/Contacts';

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
        ]
    }
];

export default router;
