import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

function Forgot() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [ resetPasswordToken,setResetPasswordToken] = useState("")
 

  const handlesubmit = async (e) => {
    e.preventDefault();


    // send otp on users moblie number
    if (!sent) {
      try {
        setLoading(true);
        const res = await axios.post("http://localhost:6600/api/auth/forgot", {
          phone,
        });
        //    console.log(res.data);
        toast.success("otp sent");
        setSent(true);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data);
        console.log(error);
      }
    } 
    // verify otp - id status approved or pending then setStatus 
    else {
      try {
        setLoading(true);
        const res = await axios.post(
          "http://localhost:6600/api/auth/verifyotp",
          {
            phone,
            otp,
          }
        );
        //   console.log(res.data);
        setSent(true);
        setStatus(res.data.status);
        setResetPasswordToken(res.data.resetPasswordToken)
        setLoading(false);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
        setLoading(false);
      }
    }
  };

  const hnadleChange = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:6600/api/auth/reset", {
        password,
        resetPasswordToken,
      });
      toast.success(res.data.message);
      setPhone("");
      setOtp("");
      setPassword("");
      setLoading(false);
      //  console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const resend = () => {
    setOtp("");
    setSent(false);
    setLoading(false);
  };

  return (
    <div className="mainBodyDiv">
      <div className="center">
        <h1>Reset Password</h1>

        {status === "approved" ? (
          <form onSubmit={hnadleChange}>
            <div className="usnam">
              <label htmlFor="password">New Password*</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
                type="password"
                placeholder=" Enter New Password"
                id="password"
              />
            </div>
            <div className="sub">
              <button type="submit">
                {loading ? "Changing..." : "Change"}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handlesubmit}>
            <div className="usnam">
              <label htmlFor="number">Mobile*</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                required
                type="number"
                placeholder=" Enter Mobile Number"
                id="number"
                readOnly = {sent ? true : false}
              />
            </div>

            {sent && (
              <>
                <div className="usnam">
                  <label htmlFor="otp">otp*</label>
                  <input
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                    value={otp}
                    required
                    type="number"
                    placeholder=" Enter Otp"
                    id="email"
                  />
                </div>
                <button onClick={resend}>Resend</button>
              </>
            )}

            <div className="sub">
              <button type="submit">
                {sent ? (
                  <> {loading ? "Verify..." : "Verify"} </>
                ) : (
                  <> {loading ? "Sending..." : "Send"} </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Forgot;
