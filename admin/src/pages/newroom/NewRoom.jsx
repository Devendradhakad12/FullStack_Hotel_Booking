import React, { useEffect, useState } from "react";
import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FileUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

function NewRoom({ inputs }) {
  const path = useLocation().pathname.split("/")[1];
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({});
  const [file, setFile] = useState([]);
  const { token } = useContext(AuthContext);



  // console.log(config);
  //console.log(token);

  const habdleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setLoading(true);
      try {
        const imgList = await Promise.all(
          file.map(async (file) => {
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
          photos: imgList,
        };
        const config = {
          headers: {
            "auth-token": token,
          },
        };
        const res = await axios.post(
          "http://localhost:6600/api/rooms/create",
          roomData,
          config
        );
        toast.success("Room Crated");
        console.log(res.data);
        setLoading(false);
        window.location.reload(true);
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        setLoading(false);
      }
    } else {
      alert("upload images");
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
            {
              file?.map((fil,i)=>{
           return <img
           key={i}
                src={
                  fil
                    ? URL.createObjectURL(fil)
                    : "https://i.pinimg.com/564x/a0/e6/29/a0e629769ae2120324ed69f4f27526de.jpg"
                }
                alt="room image"
                className="roomimage"
              />
              })
            }
       
            <label htmlFor="file">
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
              onChange={(e) => setFile(Array.from(e.target.files))}
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

export default NewRoom;
