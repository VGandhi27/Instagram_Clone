import React,{useContext} from 'react'
import { Outlet, Link , useLocation} from "react-router-dom";
import { UserContext} from '../App'
const Navbar=()=> {
  const {state,dispatch}=useContext(UserContext)
  const renderList=()=>{
    if(state){
    return[
      <li><Link to="/profile">Profile</Link></li>,
      <li><Link to="/createpost">Create Post</Link></li>

    ]
    }else{
 
      return[
        <li><Link to="/signin">SignIn</Link></li>,
        <li><Link to="/signup">SignUp</Link></li>
       
      ]
    }
  }
  return (
    <>
    <nav>
    <div className="nav-wrapper white" >
      <Link to={state?"/":"signin"} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
       {renderList()}
      </ul>
    </div>
  </nav>
  <Outlet />
    </>
  )
}
export default Navbar