import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login_user from './pages/authentication/Login_user';
import Login_admin from './pages/authentication/Login_admin';
import Register from './pages/authentication/Register';
import Home_admin from './pages/home/Home_admin';
import Update_user from './components/Update_user';
import Home_user from './pages/home/Home_user';
import Quiz from './pages/admin/quiz';
import Approve from './pages/admin/approve';
import Update from './pages/admin/update';
import Exam from './components/Exam';
import History from './components/History';



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
        path: '/update',
        element: <Update />,
      },
      {
        path: '/exam',
        element: <Exam />,
      },
      {
        path: '/history',
        element: <History />,
      },

      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);
