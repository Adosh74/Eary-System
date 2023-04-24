import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Login_user from "./pages/authentication/Login_user";
import Login_admin from "./pages/authentication/Login_admin";
import Register from "./pages/authentication/Register";

import Home_admin from "./pages/home/Home_admin";
import Home_user from "./pages/home/Home_user";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children:[
            {
                path: "/home_admin",
                element: <Home_admin />,
              },
              {
                path: "/home_user",
                element: <Home_user />,
              },
              {
                  path: "/login_admin",
                  element: <Login_admin />,
                },
                {
                  path: "/",
                  element: <Login_user />,
                },
                {
                  path: "/register",
                  element: <Register />,
                },
                {
                    path: "*",
                    element: <Navigate to={"/"} />,
                  },
        ]
      }
    
  ]);