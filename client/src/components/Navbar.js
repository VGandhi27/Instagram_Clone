import React from 'react'
import { Outlet, Link , useLocation} from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav>
    <div className="nav-wrapper white" >
      <Link to="/" className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
  <Outlet />
    </>
  )
}
