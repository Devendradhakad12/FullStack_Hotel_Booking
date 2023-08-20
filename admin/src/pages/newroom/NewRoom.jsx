import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";

function NewRoom({ formData }) {
  let path = useLocation().pathname.split("/")[1];
 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newHeader">
          <h2>add new {path} </h2>
          <Link to={`/${path}`} className="addnewLink">All {path}</Link>
        </div>
         
      </div>
    </div>
  );
}

export default NewRoom;
