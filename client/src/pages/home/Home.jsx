import React from "react";
import "./home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="homeMainDiv">

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1,scale:1 },
            hidden: { opacity: 0,scale:0.1 },
          }}
          className="homeH1"
        >
          <h1>Hotel Dev</h1>
        </motion.div>
        <motion.div className="homeP"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1,scale:1 },
            hidden: { opacity: 0,scale:3 },
          }}
        >
          <p>Best hotel of Mandsaur | Hotel Dev</p>
        </motion.div>
        <motion.div className="homeLinkDiv"
         initial="hidden"
         whileInView="visible"
         transition={{ duration: 2 }}
         variants={{
           visible: { opacity: 1,y:1 },
           hidden: { opacity: 0,y:100 },
         }}
        >
           <Link to="/rooms" className="hlink">Let's Start</Link> 
          
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
