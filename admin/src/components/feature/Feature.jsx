import React from "react";
import "./feature.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { MoreVertSharp } from "@mui/icons-material";
import "react-circular-progressbar/dist/styles.css";

function Feature() {
  return (
    <div className="feature">
      <div className="top">
        <h3>Total Revanue</h3>
        <MoreVertSharp />
      </div>
      <div className="bottom">
        <CircularProgressbar
          value={70}
          text="70%"
          strokeWidth={5}
          styles={buildStyles({
            pathColor: `blueviolet`,
            textColor: "blueviolet",
          })}
          className="progressIcon"
        />
        <p>Total sells made tody</p>
        <p className="amount" >Rs. 10000</p>
      </div>
    </div>
  );
}

export default Feature;
