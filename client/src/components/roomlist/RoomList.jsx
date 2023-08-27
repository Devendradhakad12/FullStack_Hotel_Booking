import React, { useEffect, useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import "./roomlist.scss";
import useFeatch from "../../hooks/useFeatch";
import Booking from "../booking/Booking";

function RoomList({ setImgTog, path }) {
  const { data, loading, error } = useFeatch(path);
  const [photo, setPhotos] = useState(false);
  const [book, setBook] = useState(false);
  const [price, setPrice] = useState();

  return (
    <>
      {photo && (
        <div className="allimages">
          <CloseRounded
            className="closebtn"
            onClick={() => {
              setPhotos(false);
              setImgTog(false);
            }}
          />

          <div className="imagesliderDiv">
            {photo.map((ig, i) => {
              return (
                <div key={i}>
                  <img src={ig} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {book && (
        <div className="booknow">
          <CloseRounded
            className="closebtn"
            onClick={() => {
              setBook(false);
              setImgTog(false);
            }}
          />
          <Booking roomid={book} setBook={setBook} price={price} />
        </div>
      )}

      <div className="roomlMain">
        <div className="rooml">
          {loading ? (
            <div className="errormsg"> loading...... </div>
          ) : error ? (
            <div className="errormsg"> {error.message} </div>
          ) : (
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
                         {room.unavailableDates[0]}
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
                      setBook(room._id);
                      setImgTog(true);
                      setPrice(room.price);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default RoomList;
