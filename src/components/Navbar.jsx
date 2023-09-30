import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const {logOut,user} = useContext(AuthContext)
  const links = <>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Login'>Login</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
          {
            user &&
            <>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/deshbord'>Deshbord</NavLink></li>

            </>

          }
  </>

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      console.log('user logged successfully');
    })
    .catch(error => console.error(error))
  }
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      {user.email}
      <a onClick={handleLogOut} className="btn btn-sm">LogOut</a>
      </>:
      <Link className="btn btn-sm" to='/login'>Login</Link>
    }
  </div>
</div>
  );
};

export default Navbar;