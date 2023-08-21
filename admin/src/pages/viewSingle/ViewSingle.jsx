import React, { useState } from "react";
import "./viewSingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
function ViewSingle() {
  const path = useLocation().pathname;
  // console.log(path)
  const {data,loading,error} = useFetch(`${path}`);
  //console.log(data)
  
  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />

        <div className="viewDataContainer">
          {
            loading ? "loading ............" : <div className="DataContainer">
          <div className="imgDiv"><img src={data.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user image"  /></div>
          <div className="infoDiv">
                <div><span>Username : </span> {data.username}</div>
                <div><span>Age : </span> {data.age}</div>
                <div><span>Phone : </span> {data.phone}</div>
                <div><span>Email : </span> {data.email}</div>
                <div><span>City : </span> {data.city}</div>
          </div>
            </div>

          }
        </div>
      </div>
    </div>
  );
}

export default ViewSingle;
