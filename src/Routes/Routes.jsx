import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import BookServices from "../Pages/BookServices/BookServices";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/book/:id",
        element: <BookServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(
            `https://auto.hasanmahbub.com/services/${params.id}`
          ),
      },
    ],
  },
]);



export default router;