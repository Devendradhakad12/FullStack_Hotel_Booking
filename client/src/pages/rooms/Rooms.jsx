import React, { useEffect, useState } from "react";
import "./rooms.scss";

import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import {DateRangeOutlined} from '@mui/icons-material'

function Rooms() {
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
  return (
    <div className="roomContainer">
      <div className="roomMenu">
        <div className="roomDate">
      <div className="rDate">
      <DateRangeOutlined  onClick={() => setOpenDate(!openDate)}/>
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
        <div className="searchRoom">hello</div>
        <div className="selectType">jefjernfjitni</div>
      </div>
      <div className="roomlists">
        <div className="rooms"></div>
      </div>
    </div>
  );
}

export default Rooms;
