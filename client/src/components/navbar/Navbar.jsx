import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { MenuOpen, CloseRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthCotext";
import toast from "react-hot-toast";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logout successfuly")
    navigate("/");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbarMain">
      <div className="navbar">
        <div className="logo">
          <h1>Hotel Dev</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="link">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/reserverooms" className="link">
                Reserve Rooms
              </Link>
            </li>
            {!user && (
              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/signup" className="link">
                  SignUp
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link onClick={handleLogout} className="link">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="menuMobile">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <CloseRounded className="btn" />
            ) : (
              <MenuOpen className="btn" />
            )}
          </button>

          {toggle && (
            <motion.div
              className="lists"
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, zIndex: 10 }}
              viewport={{ once: false }}
            >
              <div className="togl_under_menu">
                <button onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <CloseRounded className="btn" />
                  ) : (
                    <MenuOpen className="btn" />
                  )}
                </button>
              </div>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="link"
                      onClick={() => setToggle(!toggle)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rooms"
                      className="link"
                      onClick={() => setToggle(!toggle)}
                    >
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reserverooms"
                      className="link"
                      onClick={() => setToggle(!toggle)}
                    >
                      Reserve Rooms
                    </Link>
                  </li>
                  {!user && (
                    <li>
                      <Link
                        to="/login"
                        className="link"
                        onClick={() => setToggle(!toggle)}
                      >
                        Login
                      </Link>
                    </li>
                  )}
                  {!user && (
                    <li>
                      <Link
                        to="/signup"
                        className="link"
                        onClick={() => setToggle(!toggle)}
                      >
                        SignUp
                      </Link>
                    </li>
                  )}
                  {user && (
                    <li>
                      <Link
                        onClick={() => {
                          handleLogout();
                          setToggle(!toggle);
                        }}
                        className="link"
                      >
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
