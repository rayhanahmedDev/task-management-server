import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path : 'signup',
        element : <SignUp></SignUp>
      }
    ]
  },
]);

export default router;