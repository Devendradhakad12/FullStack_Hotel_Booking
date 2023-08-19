import React from "react";
import "./navbar.scss";
import { SearchOutlined } from "@mui/icons-material";
function Navbar() {
  return (
    <div className="navebar">
      <div className="searchbarDiv">
        <div className="inputSearch">
          <input type="text" className="inpSea" />
          <SearchOutlined  className="searchIcon"/>
        </div>
      </div>
      <div className="navbarmenuDiv"></div>
    </div>
  );
}

export default Navbar;
