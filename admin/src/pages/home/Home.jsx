import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/feature/Feature";
import { KingBedOutlined, KeyboardArrowUpOutlined } from "@mui/icons-material";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const { data:user, loading, error } = useFetch(`/users`)
 
 
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="container">
          <div className="widgetsContainer">
            <div className="widgets">
              <div className="topW">
                <p className="wP">Bookings</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                <p>100</p>
                <div style={{ color: "green" }}>
                  <KeyboardArrowUpOutlined />{" "}
                  <span className="boWAmount">300%</span>
                </div>
              </div>
            </div>
            <div className="widgets">
              <div className="topW">
                <p className="wP">Earnings</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                <p>100</p>
                <div style={{ color: "green" }}>
                  <KeyboardArrowUpOutlined />{" "}
                  <span className="boWAmount">300%</span>
                </div>
              </div>
            </div>
            <div className="widgets">
              <div className="topW">
                <p className="wP">Customer</p>
                <KingBedOutlined className="wIcon" />
              </div>
              <div className="boW">
                <p>{user?.length}</p>
                <div style={{ color: "green" }}>
                  <KeyboardArrowUpOutlined />{" "}
                  <span className="boWAmount">{user?.length * 100}%</span>
                </div>
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
