import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthCotext";
import { Link } from "react-router-dom";
import "./booking.scss";
import { DateRangeOutlined, CloseRounded } from "@mui/icons-material";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Booking({ roomid, price }) {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <BookFunc roomid={roomid} userid={user.details._id} price={price} />
      ) : (
        <Link className="loglink" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

const BookFunc = ({ roomid, userid, price }) => {
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const dayDiff = (start, end) => {
    const starttime = start.getTime();
    const endtime = end.getTime();
    const timediff = endtime - starttime;
    const daydiff = timediff / (1000 * 60 * 60 * 24);
    return daydiff;
  };
  const days = dayDiff(dates[0].startDate, dates[0].endDate);

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
            <button>Reserve</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
