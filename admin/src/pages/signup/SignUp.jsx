import React, { useContext, useEffect, useState } from "react";
import "./signup.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FileUploadOutlined } from "@mui/icons-material";
import { userInputs } from "../../constants/formSource";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const { loading, dispatch } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "ko8fnbhn");
      data.append("cloud_name", "dvkfio4zq");
      
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dvkfio4zq/image/upload",
          data
        );
        //   console.log(uploadRes.data);
        const url = uploadRes.data.secure_url;
        const newUser = {
          ...user,
          image: url,
          isAdmin: true,
        };
        const res = await axios.post(
          "http://localhost:6600/api/auth/ragister",
          newUser
        );
        
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.details,
          token: res.data.authToken,
        });
        toast.success("Loggedin successfuly")
        navigate(`/`);
      } catch (err) {
        console.log(err)
        toast.error(err.message)
        dispatch({
          type: "LOGIN_FAIL",
          payload: { message: err.response.data },
        });
      }
     
    } else {
     toast.error("Please select image")
    }
  };

  return (
    <div className="mainBodyDiv">
      <div className="center">
        <h1>Sign Up</h1>

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
          <form onSubmit={handleSubmit}>
            {userInputs.map((inp) => (
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

        <div className="sign">
          Already Admin? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
