import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookServices from "../Pages/BookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouter from "../Provider/PrivateRouter";


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
        path: "/bookings",
        element: (
          <PrivateRouter>
            {" "}
            <Bookings />{" "}
          </PrivateRouter>
        ),
      },
    ],
  },
]);



export default router;