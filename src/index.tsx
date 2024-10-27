import React from 'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Application, {MenuComponent} from './app';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <MenuComponent />
        <h1>Home</h1>
        <Application />
      </div>
    ),
  },
  {
    path: 'about',
    element: ( 
      <div>
        <MenuComponent />
        <h1>About</h1>
      </div>
    ),
  },
  {
    path: 'contact',
    element: ( 
      <div>
        <MenuComponent />
        <h1>Contact</h1>
      </div>
    ),
  },
]);

const ApplicationContainer = document.getElementById('application-container');

createRoot(ApplicationContainer as HTMLElement).render(
  <RouterProvider router={router}/>
);

