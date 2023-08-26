import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { CloseRounded } from "@mui/icons-material";
import "./roomlist.scss";
import useFeatch from "../../hooks/useFeatch";

function RoomList({ setImgTog ,path}) {
  const { data, loading, error } = useFeatch(path);
  const [photo, setPhotos] = useState(false);

  return (
    <div className="roomlMain">
      {photo && (
        <div className="allimages">
          <CloseRounded
            className="closebtn"
            onClick={() => {
              setPhotos(false);
              setImgTog(false);
            }}
          />
          <SimpleImageSlider
            width={400}
            height={400}
            images={photo}
            showBullets={true}
            showNavs={true}
            style={{ margin: "auto", objectFit: "cover" }}
          />
        </div>
      )}
      <div className="rooml">
        {loading
          ? "loading..."
          : data.map((room, i) => (
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
                      <span className="roomDes">Price : </span>Rs. {room.price}
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
                  <button   onClick={() => {
                      setPhotos(room.photos);
                      setImgTog(true);
                    }}>View</button>
                  <button>Book Now</button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default RoomList;
