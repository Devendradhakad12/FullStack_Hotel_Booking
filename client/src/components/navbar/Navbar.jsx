import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { MenuOpen, CloseRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
function Navbar() {
  const [toggle, setToggle] = useState(false);
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
              <Link to="/delux" className="link">
                Delux Rooms
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link">
                SignUp
              </Link>
            </li>
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
            <motion.div className="lists"   initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1,zIndex: 10 }}
            viewport={{ once: false }}>
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
                  <Link to="/" className="link" onClick={()=>setToggle(!toggle)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/rooms" className="link" onClick={()=>setToggle(!toggle)}>
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/delux" className="link" onClick={()=>setToggle(!toggle)}>
                    Delux Room
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="link" onClick={()=>setToggle(!toggle)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="link" onClick={()=>setToggle(!toggle)}>
                    SignUp
                  </Link>
                </li>
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
