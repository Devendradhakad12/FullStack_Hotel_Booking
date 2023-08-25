import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { CloseRounded } from "@mui/icons-material";
import './roomlist.scss';

function RoomList({imgTog,setImgTog}) {
    const images = [
        { url: "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" },
      ];
      
  return (
    <div className='roomlMain'>
       {
        imgTog &&  <div className="allimages">
            <CloseRounded className='closebtn' onClick={()=>{setImgTog(!imgTog)}}/>
        <SimpleImageSlider
        width={400}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{margin:"auto",objectFit:"cover"}}
      />

        </div>
       }
        <div className="rooml">

        <div className="room">
           <div className="roomimge"><img src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill" alt="" onClick={()=>setImgTog(!imgTog)} /></div>
           <div className="details">
           <div className="title"><p> <span className='roomDes'>Title : </span> Lorem ipsum dolor, sit ame</p></div>
           <div className="type"><p> <span className='roomDes'>Type : </span>Delux</p></div>
           <div className="Price"><p> <span className='roomDes'>Price : </span>Rs. 1200</p></div>
           <div className="maxPeople"><p> <span className='roomDes'>MaxPeople : </span>2</p></div>
           <div className="roomNo"><p> <span className='roomDes'>Room No. : </span>2</p></div>
           <div className="unavDate"><p> <span className='roomDes'>Unavailable : </span>12/03/2021</p></div>
           </div>
           <div className='roombtns'>
            <button>View</button>
            <button>Book Now</button>
           </div>
        </div>

        <div className="room">
           <div className="roomimge"><img src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill" alt="" onClick={()=>setImgTog(!imgTog)}/></div>
           <div className="details">
           <div className="title"><p> <span className='roomDes'>Title : </span> Lorem ipsum dolor, sit ame</p></div>
           <div className="type"><p> <span className='roomDes'>Type : </span>Delux</p></div>
           <div className="Price"><p> <span className='roomDes'>Price : </span>Rs. 1200</p></div>
           <div className="maxPeople"><p> <span className='roomDes'>MaxPeople : </span>2</p></div>
           <div className="roomNo"><p> <span className='roomDes'>Room No. : </span>2</p></div>
           <div className="unavDate"><p> <span className='roomDes'>Unavailable : </span>12/03/2021</p></div>
           </div>
           <div className='roombtns'>
            <button>View</button>
            <button>Book Now</button>
           </div>
        </div>

        </div>
    </div>
  )
}

export default RoomList
