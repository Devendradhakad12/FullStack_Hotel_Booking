import React from "react";
import { Link } from "react-router-dom";
//import DashboardIcon from '@mui/icons-material/Dashboard';
import { Dashboard,PersonOutline,HotelOutlined ,BedOutlined} from "@mui/icons-material";
import "./sidebar.scss";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebarLogoDiv">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="sidebarLogo">DevAdmin</span>
          </Link>
        </div>
        <div className="sidebarMenu">
         <Link to="/" style={{ textDecoration: "none" }}>
         <div className="iconDiv">
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </div>
         </Link>
         <Link to="/users" style={{ textDecoration: "none" }}>
         <div className="iconDiv">
            <PersonOutline className="icon"/>
            <span>User</span>
          </div>
         </Link>
         <Link to="/rooms" style={{ textDecoration: "none" }}>
         <div className="iconDiv">
            <BedOutlined className="icon"/>
            <span>Rooms</span>
          </div>
         </Link>
         <Link to="/bookedrooms" style={{ textDecoration: "none" }}>
         <div className="iconDiv">
            <HotelOutlined className="icon"/>
            <span>Book Room</span>
          </div>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
