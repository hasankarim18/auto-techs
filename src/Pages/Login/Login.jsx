
import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContenxt } from '../../Provider/AuthProvider';
import { baseServerUrl } from '../../utils/url';

const Login = () => {
    const { signIn   } = useContext(AuthContenxt);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

  

  //  console.log(from);

    const handleLogin = (event)=> {
        event.preventDefault()
         const form = event.target;
        
         const email = form.email.value;
         const password = form.password.value;
         signIn(email, password)
         .then((result)=> {
            const currentUser = result.user
            const loggedUser = {
              email: currentUser.email 
            }
           // console.log(loggedUser);
           // navigate(from, { replace: true });         
           fetch(`${baseServerUrl}/jwt`, {
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(loggedUser)
           })  
           .then(res => res.json())
           .then(data => {
          
            // warning Local storage is not the best( second best )
            localStorage.setItem('auto-tech-token', data.token)
           })
           .catch(error => {
            console.log(error);
           })

         }).catch(error => console.log(error))
    }
    return (
      <div className="hero min-h-screen bg-base-200 my-8">
        <div className="hero-content w-full flex-col lg:flex-row">
          <div className=" w-full md:w-1/2 lg:text-left">
            <img className="w-3/4 ml-12" src={img} alt="" />
          </div>
          {/* login form */}
          <div className="card md:w-1/2 flex justify-center w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name='email'
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name='password'
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <p className="text-xl text-center pb-8 ">
              New to Auto Techs?{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;