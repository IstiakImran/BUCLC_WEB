import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SpeakBold from './Pages/Campaign/SpeakBold/SpeakBold';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <SpeakBold></SpeakBold>
        },
        {
            path: '/about',
            element: <div>About</div>
        }
    ]);
    return (
        <>
        <RouterProvider router={router} />
        </>
    );
};

export default Router;