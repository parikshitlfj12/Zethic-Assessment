import React from "react";
import "./ProjectAmmenities.css";
import Security from "../../assets/images/Security.png";
import Avenue from "../../assets/images/Avenue.png";
import Childrens from "../../assets/images/Childrens.png";
import Street from "../../assets/images/Street.png";
import Vector from "../../assets/images/Vector.png";
import Vector1 from "../../assets/images/Vector1.png";

export default function ProjectAmmenities() {
  return (
    <div className="ProjectAmmenitiesParent">
      <div>
        <img src={Vector} alt="" style={{position:"relative", top: "10%"}}/>
      </div>
      <div className="middleContainer">
        <p className="projectAmmenitiesText">Project Ammenities</p>
        <img src={Childrens} alt="" height="37px" width="520px"/>
        <img src={Street} alt="" height="37px" width="317px"/>
        <img src={Security} alt="" height="37px" width="375px"/>
        <img src={Avenue} alt="" height="37px" width="336px"/>
      </div>
      <div>
        <img src={Vector1} alt="" style={{position:"relative", top: "90%"}}/>
      </div>
    </div>
  );
}
