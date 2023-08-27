import React, { useContext, useEffect, useState } from "react";
import "./reserve.scss";
import { AuthContext } from "../../context/AuthCotext";
import useFeatch from "../../hooks/useFeatch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReserveRoom() {
  const { user, token } = useContext(AuthContext);
  const { data, loading, error } = user
    ? useFeatch(`/reserve?user=${user.details._id}`)
    : useFeatch("");

    

  const navigate = useNavigate();
  const config = {
    headers: {
      "auth-token": token,
    },
  };

  const handleCancle = async (roomid) => {
    try {
      let res = await axios.put(
        `http://localhost:6600/api/rooms/updateroom/${roomid}`,
        {
          userId: null,
          unavailableDates: [],
          booking: false,
        },
        config
      );
      console.log(res.data);
      navigate("/rooms");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="reserveroom">
      <div className="roomlMain">
      <h2>Reserve Rooms</h2>
        <div className="rooml">
          {loading ? (
            <div className="errormsg"> loading...... </div>
          ) : error && user ? (
            <div className="errormsg">  {error.message} </div>
          ) : data[0] ? (
            data.map((room, i) => (
              <div className="room" key={room._id}>
                <div className="roomimge">
                  <img
                    src={room.photos[0]}
                    alt=""
                    onClick={() => {
                      setPhotos(room.photos);
                      setImgTog(true);
                    }}
                  />
                </div>
                <div className="details">
                  <div className="title">
                    <p>
                      <span className="roomDes">Title : </span>
                      {room.title}
                    </p>
                  </div>
                  <div className="type">
                    <p>
                      <span className="roomDes">Type : </span>
                      {room.ac ? "Delux" : "Non-Delux"}
                    </p>
                  </div>
                  <div className="Price">
                    <p>
                      <span className="roomDes">Price : </span>Rs.
                      {room.price}
                    </p>
                  </div>
                  <div className="maxPeople">
                    <p>
                      <span className="roomDes">MaxPeople : </span>
                      {room.maxPeople}
                    </p>
                  </div>
                  <div className="roomNo">
                    <p>
                      <span className="roomDes">Room No. : </span>
                      {room.roomNumber}
                    </p>
                  </div>
                  <div className="unavDate">
                    <p>
                      <span className="roomDes">Unavailable : </span>
                      {room.unavailableDates.map((dt) => {
                        return <div>{dt.split(":")[0].split("T")[0]}</div>
                      })}
                    </p>
                  </div>
                </div>
                <div className="roombtns">
                  <button
                    onClick={() => {
                      setPhotos(room.photos);
                      setImgTog(true);
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      handleCancle(room._id);
                    }}
                  >
                    Cancle Booking
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="errormsg">No Reserved Room</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReserveRoom;
