import React, { useContext, useEffect, useState } from "react";
import "./login.scss";
//import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import { Alert } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
  });
 

  return (
    <div className="mainBodyDiv">
      <div className="center">
        <h1>Login</h1>
        <form>
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
            <button>submit</button>
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
