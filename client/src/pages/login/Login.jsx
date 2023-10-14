import React, { useContext, useEffect, useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthCotext";
import toast from "react-hot-toast";
 

function Login() {
  const navigate = useNavigate();
  const {user,loading,dispatch} = useContext(AuthContext)
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });
 

  const handlesubmit = async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("http://localhost:6600/api/auth/login",userdata)
     dispatch({type:"LOGIN_SUCCESFUL",payload:res.data.details,token:res.data.authToken})
     toast.success("Login Successfuly")
     navigate('/')
    } catch (error) {
      toast.error(error.response.data)
      console.log(error)
      dispatch({type:"LOGIN_FAILD",payload:{message:error.response.data}})
    }

  }
  

  return (
    <div className="mainBodyDiv">
      
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
          <div className="usnam">
            <label>Email*</label>
            <input
              onChange={(e) => {
                setUserData({ ...userdata, email: e.target.value });
              }}
              value={userdata.email}
              required
              type="email"
              placeholder=" Type your name"
              id="email"
            />
          </div>
          <div className="pass">
            <label>Password*</label>
            <input
              onChange={(e) => {
                setUserData({ ...userdata, password: e.target.value });
              }}
              value={userdata.password}
              required
              type="password"
              placeholder=" Type your password"
            />
          </div>

          <div className="sub">
          <button type="submit">{loading ? "Please wait.......":"Sumbit"}</button>
          </div>
        </form>
          <div className="forgotPassword">
            <Link to="/forgot">Forgot Password</Link>
          </div>
        <div className="sign">
          New Admin? <Link to="/signup"> Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
