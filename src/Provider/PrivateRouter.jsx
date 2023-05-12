import { useContext } from "react";
import { AuthContenxt } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContenxt)

    let location = useLocation();


    if(loading){
        return (
          <div className="w-full h-screen flex items-center justify-center -mt-20 text-center">
            <progress className="progress w-56"></progress>
          </div>
        );
    }else {
        if(!user){
            return <Navigate to="/login" state={{ from: location }} />;
        }else {
            return children
        }
    }

    
};

export default PrivateRouter;