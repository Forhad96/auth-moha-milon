
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const {singInUser} = useContext(AuthContext)

  const navigate =useNavigate()


  const handleLoginSubmit =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sing in user 
    singInUser(email,password)
    .then(result =>{
      console.log(result.user);
      e.target.reset()
      navigate('/')
    })
    .catch(error => {
      console.error(error);
    })
    
  }
  return (
    <div className="text-center mt-20">
      <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl mt-4 font-bold text-center">Login now!</h1>
        <div className="card-body">
          <form onSubmit={handleLoginSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                required
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
                placeholder="Password"
                required
                name='password'
                className="input input-bordered"
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
          </form>
          <p>New here?<Link to='/register'> Please<button className="btn btn-link">Register</button></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
