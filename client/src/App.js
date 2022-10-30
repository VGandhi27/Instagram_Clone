import React ,{createContext,useReducer,useContext, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import {useNavigate} from 'react-router-dom'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext =createContext()

const Routing=()=>{
  const navigate = useNavigate();
    const {state,dispatch}=useContext(UserContext)
    // eslint-disable-next-line
 useEffect(()=>{
  const user =JSON.parse(localStorage.getItem("user")) 
 console.log(user)
  if(user){
    dispatch({type:"USER",payload:user})
    navigate("/")
      }
      else{
        if(!history.location.pathname.startsWith('/reset'))
        navigate("/signin")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
  
}


function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Routing/></>}>
            <Route index element={<><Home  /></>} />
            <Route path="home" element={<Home  />} />
            <Route path="signin" element={<><SignIn   /></>} />
            <Route path="signup" element={<><SignUp /></>} />
            <Route path="profile" element={<><Profile /></>} />
            <Route path="createpost" element={<><CreatePost /></>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;









