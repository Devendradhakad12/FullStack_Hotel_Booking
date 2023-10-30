import React, { useContext } from "react";
import "./home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthCotext";
function Home() {

  const {user,error,token} = useContext(AuthContext)
  //console.log(user ? user.details :"")
 


  return (
    <div className="home">
      <div className="homeMainDiv">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.1 },
            }}
            className="homeH1"
          >
            <h1>Hotel Dev</h1>
          </motion.div>
          <motion.div
            className="homeP"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 3 },
            }}
          > 
            <p>Best hotel of Mandsaur | Hotel Dev</p>
          </motion.div>
          <motion.div
            className="homeLinkDiv"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1,delay:1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: 30 },
            }}
          >
            <Link to="/rooms" className="hllink">
              BOOK A STAY
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="dnRoomDiv">

        <motion.div className="dn1"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 1 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <div className="dn1Img">
         <Link to="/rooms/delux">   <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
              alt="Delux"
            /></Link>
          </div>
          <div className="dn1H3">
            <Link to="/rooms/delux" className="hlink">
              Delux Room
            </Link>
          </div>
        </motion.div>

        <motion.div className="dn1"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 1 },
            hidden: { opacity: 0, y: -150 },
          }}
        >
          <div className="dn1H3D">
            <Link to="/rooms/nondelux" className="hlink">
              Normal Room
            </Link>
          </div>
          <div className="dn1Img">
        <Link to="/rooms/nondelux">    <img
              src="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU="
              alt="Non-Delux"
            /></Link>
          </div>
          <div className="dn1H3M">
            <Link to="/rooms/nondelux" className="hlink">
              Normal Room
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
