import React from "react";
import "./TrendingProjects.css";
import Heart from "../../assets/images/Heart.png";
import Img1 from "../../assets/images/im1.png";
import Img2 from "../../assets/images/im2.png";

export default function TrendingProjects() {
  return (
    <div className="TPContainer">
      <div className="TPFirstContainer">
        <div className="leftContainer">
          <p className="headingStyle">340k+</p>
          <p className="subHeadingStyle">Landmark near chennai</p>
        </div>
        <div className="rightContainer">
          <img src={Heart} alt="heart" />
          <p>Trending Projects</p>
        </div>
      </div>

      <div className="TPSecondContainer">
        <div>
          <div style={{display:"flex", columnGap: "300px", justifyContent: "space-around"}}>
            <div>
              <p className="headingStyle">437k+</p>
              <p className="subHeadingStyle">Happy Customers</p>
            </div>
            <div>
              <p className="headingStyle">4.3m+</p>
              <p className="subHeadingStyle">Sq. Feet Developed</p>
            </div>
          </div>
          <p className="loreumStyles">
            Loreum ispum is the dummy text used to fill the contest and the
            loreum used to fill the content and the loreum.
          </p>
        </div>
        <div>
          <img src={Img1} alt="img1" style={{ marginRight: "15px" }} />
          <img src={Img2} alt="img2" />
        </div>
      </div>
    </div>
  );
}
