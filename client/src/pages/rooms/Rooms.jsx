import React, { useEffect, useState } from "react";
import "./rooms.scss";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangeOutlined } from "@mui/icons-material";
import RoomList from "../../components/roomlist/RoomList";

function Rooms() {
  const [imgTog, setImgTog] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [type, setType] = useState("");

  const handleSerach = () => {
    setOpenDate(false);
  };

  return (
    <div className="roomContainer">
      {!imgTog ? (
        <div className="roomMenu">
          <div className="roomDate">
            <div className="rDate">
              <DateRangeOutlined onClick={() => setOpenDate(!openDate)} />
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
            </div>
          </div>
          <div className="selectType">
            <div className="selectDiv">
              <select
                name="roomtype"
                id="roomtype"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Select Room Type</option>
                <option value="ac">Delux</option>
                <option value="nonAc">Non-Delux</option>
              </select>
            </div>
            <div className="searchBtn">
              <button onClick={handleSerach}>Search</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="roomlists">
        <div className="rooms">
          <RoomList imgTog={imgTog} setImgTog={setImgTog} />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
