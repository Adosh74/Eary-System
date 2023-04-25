import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login_user from './pages/authentication/Login_user';
import Login_admin from './pages/authentication/Login_admin';
import Register from './pages/authentication/Register';

import Home_admin from './pages/home/Home_admin';

import Update_user from './components/Update_user';
import Update_admin from './components/Update_admin';
import Home_user from './pages/home/Home_user';

import Approve from './pages/admin/approve';
import Quiz from './pages/admin/quiz';
import Update from './pages/admin/update';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/home_user',
        element: <Home_user />,
      },
      {
        path: '/home_admin',
        element: <Home_admin />,
      },

      {
        path: '/login_admin',
        element: <Login_admin />,
      },
      {
        path: '/',
        element: <Login_user />,
      },
      {
        path: '/register',
        element: <Register />,
      },

      {
        path: '/update_admin',
        element: <Update_admin />,
      },
      {
        path: '/update_user',
        element: <Update_user />,
      },
      {
        path: '/approve',
        element: <Approve />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/updata',
        element: <Update />,
      },

      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);
