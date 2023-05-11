
import { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContenxt } from "../../Provider/AuthProvider";
const SignUp = () => {

     const { createUser } = useContext(AuthContenxt);

    const handleSignup = (event) => {


       


        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value

        createUser(email, password)
          .then(() => {
           // const user = userCredential.user;
            
            alert("user created succssfully");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });


        console.log(name, email, password)
    };

    return (
      <div className="hero min-h-screen bg-base-200 my-8">
        <div className="hero-content w-full flex-col lg:flex-row">
          <div className=" w-full md:w-1/2 lg:text-left">
            <img className="w-3/4 ml-12" src={img} alt="" />
          </div>
          {/* login form */}
          <div className="card md:w-1/2 flex justify-center w-full shadow-2xl bg-base-100">
            <h2 className="text-center text-3xl">Sign up</h2>
            <form onSubmit={handleSignup}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sgin Up</button>
                </div>
              </div>
            </form>
            <p className="text-xl text-center pb-8 ">
              Already have and account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login in 
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;