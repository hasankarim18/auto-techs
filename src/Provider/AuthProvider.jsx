import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import { baseServerUrl } from "../utils/url";


export const AuthContenxt = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);

    useEffect(() => {
      const unsubscibe = onAuthStateChanged(auth, currentUser => {
         setLoading(false)
        setUser(currentUser)

       

        if(currentUser && currentUser.email){
           const loggedUser = {
            email:currentUser.email
           };
           fetch(`${baseServerUrl}/jwt`, {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(loggedUser),
           })
             .then((res) => res.json())
             .then((data) => {
               // warning Local storage is not the best( second best )
               localStorage.setItem("auto-tech-token", data.token);
             })
             .catch((error) => {
               console.log(error);
             });
        }else {
          localStorage.removeItem("auto-tech-token");
        }

       
      
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

    const logout = ()=> {
    
    return  signOut(auth)
       
    }

    /** sign in with google */

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = ()=> {
      return signInWithPopup(auth, googleProvider)
    }

  
   

    const userInfo = {
      createUser,
      user,
      loading,
      setUser,
      setLoading,
      signIn,
      logout,
      signInWithGoogle,
    };

    return (
        <AuthContenxt.Provider value={userInfo}>
            {children}
        </AuthContenxt.Provider>
    );
};

export default AuthProvider;