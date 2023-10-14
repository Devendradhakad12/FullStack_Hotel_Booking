import React, { useContext, useEffect, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
 

function Login() {
  const navigate = useNavigate();
  const { user, loading,  dispatch } = useContext(AuthContext);
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:6600/api/auth/login",
        userdata
      );
      if (res.data.isAdmin) {
        toast.success("Loggedin successfuly")
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.details,
          token: res.data.authToken,
        });
        navigate("/");
      } else {
        toast.error("You are not admin")
        dispatch({
          type: "LOGIN_FAIL",
          payload: { message: "You are not authorized" },
        });
      }
   
      setUserData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error)
      toast.error(error.response.data)
      dispatch({
        type: "LOGIN_FAIL",
        payload: { message: error.response.data },
      });
    }
  };

  return (
    <div className="mainBodyDiv">
    
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="usnam">
            <label>Email*</label>
            <input
              onChange={(e) => {
                setUserData({ ...userdata, email: e.target.value });
              }}
              value={userdata.email}
              required
              type="email"
              placeholder=" Type your Email"
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
            <button type="submit">
              {loading ? "Please wait......." : "Sumbit"}
            </button>
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
