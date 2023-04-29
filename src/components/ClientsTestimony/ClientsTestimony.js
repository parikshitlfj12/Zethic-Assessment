import React from "react";
import "./ClientsTestimony.css";
import Star2 from "../../assets/images/Star2.png";
import family1 from "../../assets/images/family1.png";
import family2 from "../../assets/images/family2.png";
import family3 from "../../assets/images/family3.png";
import PlayButton from "../../assets/images/PlayButton.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";

export default function ClientsTestimony() {
  return (
    <div className="clientsTestimonyParent">
      <p className="CTHeading">
        <img
          src={Star2}
          alt=""
          style={{ position: "absolute", left: "8%", top: "8px" }}
        />
        Clients Testimonial
      </p>
      <div className="imagesOverlappingDiv">
        <img src={family1} alt="" className="image1" />
        <img src={family2} alt="" className="image2" />
        <img src={family3} alt="" className="image3" />
        <img src={PlayButton} alt="" className="playButton" />
        <img src={PlayButton} alt="" className="playButton" />
        <img
          src={Star2}
          alt=""
          style={{ position: "absolute", left: "101%", top: "70%" }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <img
          src={left}
          alt=""
          className="image1"
          style={{ marginRight: "56px" }}
        />
        <img src={right} alt="" className="image1" />
      </div>
    </div>
  );
}
