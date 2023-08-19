import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./rooms.scss";
function Rooms() {
  return (
    <div className="room">
      <Sidebar />
      <div className="roomContainer">
        <Navbar />
        room
      </div>
    </div>
  );
}

export default Rooms;
