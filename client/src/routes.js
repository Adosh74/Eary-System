import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Login_user from "./pages/authentication/Login_user";
import Login_admin from "./pages/authentication/Login_admin";
import Register from "./pages/authentication/Register";
import Home from "./pages/home/Home";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />,
              },
              {
                  path: "/login_admin",
                  element: <Login_admin />,
                },
                {
                  path: "/login_user",
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