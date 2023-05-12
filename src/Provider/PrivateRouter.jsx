import { useContext } from "react";
import { AuthContenxt } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContenxt)

    let location = useLocation();


    if(loading){
        return <h1 className="text-6xl text-rose-500">Loading...</h1>
    }else {
        if(!user){
            return <Navigate to="/login" state={{ from: location }} />;
        }else {
            return children
        }
    }

    
};

export default PrivateRouter;