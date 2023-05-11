import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";


export const AuthContenxt = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);

    useEffect(() => {
      const unsubscibe = onAuthStateChanged(auth, currentUser => {
         setLoading(false)
        setUser(currentUser)
        console.log(currentUser);
      } )
      return ()=> {
        return unsubscibe;
      }
    }, [auth])
    
   
    // create user
    const createUser = (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user sign in
    const signIn = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

  
   

    const userInfo = {
      createUser,
      user,
      loading,
      setUser,
      setLoading,
      signIn,
    };

    return (
        <AuthContenxt.Provider value={userInfo}>
            {children}
        </AuthContenxt.Provider>
    );
};

export default AuthProvider;