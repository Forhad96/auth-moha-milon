import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser,singInWithGoogle } = useContext(AuthContext);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name);

    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSingIn =()=>{
      singInWithGoogle()
      .then(result =>{
        console.log(result.user);
      })
      .catch(error =>{
        console.error(error);
      })
  }
  return (
    <div className="text-center mt-20">
      <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl mt-4 font-bold text-center">Register now!</h1>
        <div className="card-body">
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                className="input input-bordered"
              />
            </div>
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
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt flex gap-2 text-lg link link-hover">
                  <input type="checkbox" name="terms" id="" />
                  Accept terms and conditions
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p>
          <button onClick={handleGoogleSingIn} className="btn btn-gust">google</button>
          <button className="btn btn-gust">github</button>

          </p>

          <p>
            Already have an account??
            <Link to="/login">
              {" "}
              Please<button className="btn btn-link">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
