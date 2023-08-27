import React, { useContext, useEffect, useState } from "react";
import "./reserve.scss";
import { AuthContext } from "../../context/AuthCotext";
import axios from "axios";
import { setDate } from "date-fns";
import useFeatch from "../../hooks/useFeatch";

function ReserveRoom() {
  const { user, token } = useContext(AuthContext);
   const {data,loading,error} = useFeatch(`/reserve?user=${user.details._id}`)
  return <div className="reserveroom"> 
  {
    loading ? "loading...." : <div>
      {
        data.map((room)=>{
          return <div key={room._id}>
{room.title}
          </div>
        })
      }
    </div>
  }
  </div>;
}

export default ReserveRoom;
