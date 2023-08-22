import React, { useEffect, useState } from "react";
import "./signup.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FileUploadOutlined } from "@mui/icons-material";
import { userInputs } from "../../constants/formSource";
import { Alert } from "@mui/material";
function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error,success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
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
          isAdmin: true,
        };
        const res = await axios.post(
          "http://localhost:6600/api/auth/ragister",
          newUser
        );
        setSuccess({ message: "You are Successfuly registerd" });
        setLoading(false);
        navigate(`/login`);
      } catch (err) {
        setLoading(false);
        err == undefined
          ? setError({ message: "network error" })
          : setError({ message: err.response.data.message });
        //console.log(err)
      }
      setLoading(false);
    } else {
      setError({ message: " please select image" });
    }
  };

  return (
    <div className="mainBodyDiv">
      {error ? (
        <Alert severity="error" className="alert">
          {error.message}
        </Alert>
      ) : (
        ""
      )}
      {success ? <Alert severity="success">{success.message}</Alert> : ""}
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
