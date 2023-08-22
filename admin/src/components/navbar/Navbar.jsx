import React, { useContext } from "react";
import "./navbar.scss";
import { SearchOutlined } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
function Navbar() {
  const { user,dispatch } = useContext(AuthContext);
const handlelogout = ()=>{
dispatch({type:"LOGOUT"})
}
 
  return (
    <div className="navebar">
      <div className="searchbarDiv">
        <div className="inputSearch">
          <input type="text" className="inpSea" />
          <SearchOutlined className="searchIcon" />
        </div>
      </div>
      <div className="navbarmenuDiv">
        <div className="username">
          <h3>{user.username}</h3>
        </div>
        <div className="userImg">
          <img src={user.image} alt="user" />
        </div>
        <div className="logoutBtn">
          <button onClick={handlelogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
