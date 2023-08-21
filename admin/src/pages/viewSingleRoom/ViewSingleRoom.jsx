import React, { useState } from "react";
import "./viewSingleRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
function ViewSingleRoom() {
  const path = useLocation().pathname.split('/')[2];
 //  console.log(path)
  const {data,loading,error} = useFetch(`/rooms/getbyid/${path}`);
 //console.log(data)
  
  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />

        <div className="viewDataContainer">
          {
            loading ? "loading ............" : <div className="DataContainer">
          <div className="imgDiv">{data.photos?.map((img,i)=>(<img key={i} src={img || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user image" className="bookedroomimg" />))}</div>
          <div className="infoDiv">
                <div><span>Title : </span> {data.title}</div>
                <div><span>Price : </span> {data.price} p/n</div>
                <div><span>Room Number : </span> {data.roomNumber}</div>
                <div><span>Booking : </span> {data.booking === true ? "true":"false"}</div>
                <div><span>Max People : </span> {data.maxPeople}</div>
          </div>
            </div>

          }
        </div>
      </div> 
    </div>
  );
}

export default ViewSingleRoom;
