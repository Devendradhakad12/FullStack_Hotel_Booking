import React, { useContext, useEffect, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import {Alert} from '@mui/material'


function Login() {
  const navigate = useNavigate()
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
  });
  useEffect(()=>{
setTimeout(()=>{
dispatch({type:"LOGOUT"})
},3000)
  },[error])

  const handleSubmit =  async(e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
     try {
      const res = await axios.post("http://localhost:6600/api/auth/login",userdata)
      if(res.data.isAdmin){
        dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
        navigate('/')
      }else{
        dispatch({type:"LOGIN_FAIL",payload:{message:"You are not authorized"}})
      }
      setUserData({
        username: "",
        password: "", 
      })
     } catch (error) {
      dispatch({type:"LOGIN_FAIL",payload:{message:error.response.data}})
     // console.log(error)
     }
  };

  return (
    <div className="mainBodyDiv">
       {error ? <Alert severity="error" className="alert">{error.message}</Alert> : ""}
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="usnam">
            <label>Username*</label>
            <input
              onChange={(e) => {
                setUserData({ ...userdata, username: e.target.value });
              }}
              value={userdata.username}
              required
              type="text"
              placeholder=" Type your name"
              id="username"
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

        <div className="sign">
          New Admin? <Link to="/signup"> Signup</Link>
        </div>
     
      </div>
    </div>
  );
}

export default Login;
