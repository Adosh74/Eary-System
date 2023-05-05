import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Exam from './components/Exam';
import History from './components/History';
import Update_user from './components/Update_user';
import Approve from './pages/admin/approve/approve';
import Createquiz from './pages/admin/createquiz/createquiz';
import Editquiz from './pages/admin/editquiz/editquiz';
import Quiz from './pages/admin/quiz/quiz';
import Update from './pages/admin/update';
import Addusers from './pages/admin/users/addusers';
import Users from './pages/admin/users/users';
import Login_admin from './pages/authentication/Login_admin';
import Register from './pages/authentication/Register';
import Home_admin from './pages/home/Home_admin';
import Home_user from './pages/home/Home_user';
import Multiple_exams from './components/Multiple_exams';
import Add_question from './pages/admin/editquiz/Add_question';

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
        path: '/',
        element: <Login_admin />,
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
      {
        path: '/createquiz',
        element: <Createquiz />,
      },
      {
        path: '/editquiz',
        element: <Editquiz />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/addusers',
        element: <Addusers />,
      },
      {
        path: '/Multiple_exams',
        element: <Multiple_exams />,
      },
      {
        path: '/Add_question',
        element: <Add_question />,
      },
    ],
  },
]);
