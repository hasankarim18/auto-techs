import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/signup",
          element:<SignUp />
        }
    ]
  },
]);



export default router;