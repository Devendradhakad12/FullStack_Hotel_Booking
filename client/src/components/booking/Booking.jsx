import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthCotext";
import { Link, useNavigate } from "react-router-dom";
import "./booking.scss";
import { DateRangeOutlined, CloseRounded } from "@mui/icons-material";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
function Booking({ roomid, price }) {
  const { user,token } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <BookFunc roomid={roomid} userid={user.details._id} price={price}  token={token}/>
      ) : (
        <Link className="loglink" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}


//! book function -----------------------------
const BookFunc = ({ roomid, userid, price,token }) => {

  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  // count selected days
  const dayDiff = (start, end) => {
    const starttime = start.getTime();
    const endtime = end.getTime();
    const timediff = endtime - starttime;
    const daydiff = timediff / (1000 * 60 * 60 * 24);
    return daydiff;
  };
  const days = dayDiff(dates[0].startDate, dates[0].endDate);

  // get all date range list
  const getAllDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate.getTime());
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  const allDates = getAllDates(dates[0].startDate, dates[0].endDate);

  // useNavigate for navigate after reservation
  const navigate = useNavigate();

  // handle click function for reserve room
  const config = {
    headers: {
      "auth-token": token,
    },
  };
  const handleClick = async () => {
    try {
      let res = await axios.put(
        `http://localhost:6600/api/rooms/updateroom/${roomid}`,
        {
          userId: userid,
          unavailableDates: allDates,
          booking: true,
        }, config
      );
      console.log(res.data);
      navigate("/reserverooms");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="bookingMainDiv">
      <div className="rDate">
        {!openDate ? (
          <DateRangeOutlined onClick={() => setOpenDate(!openDate)} />
        ) : (
          ""
        )}
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
          dates[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
            minDate={new Date()}
          />
        )}
        {openDate ? (
          <CloseRounded onClick={() => setOpenDate(!openDate)} />
        ) : (
          ""
        )}
      </div>
      {days == 0 ? (
        <div style={{ marginTop: "30px" }}> please select Date</div>
      ) : (
        <div>
          <div className="datesDiv">
            <div>CheckIn : {format(dates[0].startDate, "dd/MM/yyyy")}</div>
            <div>CheckOut : {format(dates[0].endDate, "dd/MM/yyyy")}</div>
            <div>Days : {days}</div>
            <div>Price : {price}</div>
            <div>TotalePrice : {days * price}</div>
          </div>
          <div className="bookingbtn">
            <button onClick={handleClick}>Reserve</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
