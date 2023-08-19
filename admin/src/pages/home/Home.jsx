import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/feature/Feature";
import {KingBedOutlined,KeyboardArrowUpOutlined} from "@mui/icons-material";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="container">
          <div className="widgetsContainer">
            <div className="widgets">
              <div className="topW">
                <p className="wP">New Booking</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                 <p>100</p>
                 <div style={{color:"green"}}><KeyboardArrowUpOutlined/> <span className="boWAmount">300%</span></div>
              </div>
            </div>
            <div className="widgets">
            <div className="topW">
                <p className="wP">Earnings</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                 <p>100</p>
                 <div style={{color:"green"}}><KeyboardArrowUpOutlined/> <span className="boWAmount">300%</span></div>
              </div>
            </div>
            <div className="widgets">
            <div className="topW">
                <p className="wP">Check In</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                 <p>100</p>
                 <div style={{color:"green"}}><KeyboardArrowUpOutlined/> <span className="boWAmount">300%</span></div>
              </div>
            </div>
            <div className="widgets">
            <div className="topW">
                <p className="wP">Check Out</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                 <p>100</p>
                 <div style={{color:"green"}}><KeyboardArrowUpOutlined/> <span className="boWAmount">300%</span></div>
              </div>
            </div>
          </div>

          <div className="chartContainer">
            <Feature />

            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
