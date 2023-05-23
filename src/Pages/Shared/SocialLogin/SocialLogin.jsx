import { useContext } from "react";
import { AuthContenxt } from "../../../Provider/AuthProvider";
import { baseServerUrl } from "../../../utils/url";


const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContenxt)

    const signIn   = ()=> {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
             fetch(`${baseServerUrl}/jwt`, {
               method: "POST",
               headers: {
                 "content-type": "application/json",
               },
               body: JSON.stringify(user),
             })
               .then((res) => res.json())
               .then((data) => {
                 // warning Local storage is not the best( second best )
                 localStorage.setItem("auto-tech-token", data.token);
               })
               .catch((error) => {
                 console.log(error);
               });
            console.log(user);
        } )
        .catch(error =>{
             const errorCode = error.code;
             const errorMessage = error.message;
             console.log({errorCode}, {errorMessage});
        } )
    }

    return (
      <div className="pt-4-4">
        <div className="divider">Or</div>
        <div className="mt-4 text-center mb-4">
          <button
            onClick={signIn}
            className="btn btn-circle font-bold text-2xl   btn-outline"
          >
            G
          </button>
        </div>
        <div className="divider"></div>
      </div>
    );
};

export default SocialLogin;