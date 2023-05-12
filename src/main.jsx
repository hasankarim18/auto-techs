import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from "react-router-dom";
 import "react-toastify/dist/ReactToastify.css";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider';
 import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
