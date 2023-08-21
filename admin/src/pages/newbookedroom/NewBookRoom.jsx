import React, { useEffect, useState } from "react";
import "./newBookedRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FileUploadOutlined } from "@mui/icons-material";
import axios from "axios";

function NewBookedRoom({ inputs }) {
  const path = useLocation().pathname.split("/")[1];
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({});
  const [file, setFile] = useState("");

  const habdleSubmit = async (e) => {
    e.preventDefault();
 if(file){
  setLoading(true);
  try {
    const imgList = await Promise.all(
      Object.values(file).map(async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ko8fnbhn");
        data.append("cloud_name", "dvkfio4zq");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dvkfio4zq/image/upload",
          data
        );
        const url = uploadRes.data.secure_url;
        //   console.log(uploadRes.data.secure_url);
        return url;
      })
    );
    const roomData = {
      ...room,
      booking:true,
      photos: imgList,
    };
    const res = await axios.post(
      "http://localhost:6600/api/rooms/create",
      roomData
    );
    alert("Room Created");
    console.log(res.data);
    setLoading(false);
    window.location.reload(true)
  } catch (error) {
    console.log(error);
    alert(error.message);
    setLoading(false);
  }
 
 }
 else{
    alert("upload images")
 }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newHeader">
          <h2>add new {path} </h2>
          <Link to={`/${path}`} className="addnewLink">
            All {path}
          </Link>
        </div>

        <div className="roomInputs">
          <div className="uesrImgUp">
            <label htmlFor="file">
              <img
                src={
                  file
                    ? URL.createObjectURL(file[0])
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="user image"
                className="userImage"
              />
              {/*    {(function (file) {
                for (let i = 0; i < file.length; i++)
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file[i])
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="user image"
                    className="userImage"
                  />;
                  //  console.log(i);
              })(file)} */}

              <p>
                Upload Image <FileUploadOutlined />*
              </p>
            </label>
            <input
              multiple
              type="file"
              id="file"
              name="file"
              style={{ display: "none" }}
              required
              onChange={(e) => setFile(e.target.files)}
            />
          </div>
          <form onSubmit={habdleSubmit}>
            {inputs.map((inp) => (
              <div className="formInput" key={inp.id}>
                <label>{inp.label} *</label>
                <input
                  id={inp.id}
                  type={inp.type}
                  placeholder={inp.placeholder}
                  value={room.id}
                  required
                  onChange={(e) => {
                    setRoom({ ...room, [e.target.id]: e.target.value });
                  }}
                />
              </div>
            ))}
            <select
              required
              name="ac"
              id="ac"
              onChange={(e) => {
                setRoom({ ...room, [e.target.id]: e.target.value });
              }}
            >
              <option value="">Select Ac*</option>
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
            <button>{loading ? "Submiting........." : "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

 


export default NewBookedRoom;
