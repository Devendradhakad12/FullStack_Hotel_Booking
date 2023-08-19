import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./bookedrooms.scss"
function BookedRooms() {
  return (
    <div className="bookroom">
    <Sidebar />
    <div className="bookroomContainer">
      <Navbar />
    booked  room
    </div>
  </div>
  );
}

export default BookedRooms;
