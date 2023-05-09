import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Exam from './components/Exam';
import History from './components/History';
import Multiple_exams from './components/Multiple_exams';
import Update_user from './components/Update_user';
import View_quiz_user from './components/View_quiz_user';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import Createquiz from './pages/admin/createquiz/createquiz';
import Add_question from './pages/admin/editquiz/Add_question';
import View_quiz_admin from './pages/admin/editquiz/View_quiz_admin';
import Editquiz from './pages/admin/editquiz/editquiz';
import Quiz from './pages/admin/quiz/quiz';
import Update from './pages/admin/update';
import Addusers from './pages/admin/users/addusers';
import Users from './pages/admin/users/users';
import Login_admin from './pages/authentication/Login_admin';
import Register from './pages/authentication/Register';
import Home_admin from './pages/home/Home_admin';
import Home_user from './pages/home/Home_user';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login_admin />,
      },
      {
        element: <AdminGuard />,
        children: [
          {
            path: '/home_admin',
            element: <Home_admin />,
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
            path: '/update',
            element: <Update />,
          },
          {
            path: '/quiz',
            element: <Quiz />,
          },
          {
            path: '/View_quiz_admin/:id',
            element: <View_quiz_admin />,
          },
          {
            path: '/Add_question/:id',
            element: <Add_question />,
          },
          {
            path: '/addusers',
            element: <Addusers />,
          },
        ],
      },
      {
        element: <UserGuard />,
        children: [
          {
            path: '/home_user',
            element: <Home_user />,
          },
          {
            path: '/Multiple_exams',
            element: <Multiple_exams />,
          },
          {
            path: '/history',
            element: <History />,
          },
          {
            path: '/exam/:id',
            element: <Exam />,
          },
        ],
      },
      {
        path: '/register',
        element: <Register />,
      },

      {
        path: '/update_user/:id',
        element: <Update_user />,
      },

      {
        path: '*',
        element: <Navigate to={'/'} />,
      },

      {
        path: '/View_quiz_user/:id',
        element: <View_quiz_user />,
      },
    ],
  },
]);
