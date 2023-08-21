import React, { useEffect, useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, Navigate, useLocation } from "react-router-dom";
import { FileUploadOutlined } from "@mui/icons-material";
import axios from "axios";

function NewUser({ inputs }) {
  let path = useLocation().pathname.split("/")[1];
  const [file, setFile] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const habdleSubmit = async (e) => {
    if (file) {
      e.preventDefault();
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "ko8fnbhn");
      data.append("cloud_name", "dvkfio4zq");
      setLoading(true);
      try {
         const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dvkfio4zq/image/upload",
      data
    );
        //   console.log(uploadRes.data.secure_url);
          const url = uploadRes.data.secure_url;
        const newUser = {
          ...user,
           image: url,
        };
        const res = await axios.post(
          "http://localhost:6600/api/auth/ragister",
          newUser
        );
        alert("New user created");
        setLoading(false);
        console.log("user creater");
      } catch (err) {
        setLoading(false);
        alert(err == undefined ? err.response.data.message : "Network Error");
      }
      setLoading(false);
    } else {
      alert("please select image");
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

        <div className="userInputs">
          <div className="uesrImgUp">
            <label htmlFor="file">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="user image"
                className="userImage"
              />
              <p>
                Upload Image <FileUploadOutlined />*
              </p>
            </label>
            <input
              type="file"
              id="file"
              name="file"
              style={{ display: "none" }}
              required
              onChange={(e) => setFile(e.target.files[0])}
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
                  value={user.id}
                  required
                  onChange={(e) => {
                  setUser({ ...user, [e.target.id]: e.target.value });
                  }}
                />
              </div>
            ))}
            <button>{loading ? "Submiting........." : "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
