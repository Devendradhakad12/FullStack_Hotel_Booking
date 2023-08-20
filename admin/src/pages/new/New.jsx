import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
function New({ formData }) {
  let path = useLocation().pathname.split("/")[1];
  console.log(path);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div> new {formData} </div>
        <Link to={`/${path}`}>All {path}</Link>
      </div>
    </div>
  );
}

export default New;
