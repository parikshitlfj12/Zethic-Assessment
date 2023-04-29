import React from "react";
import "./ExploreCollection.css";
import green1 from "../../assets/images/green1.png";
import green2 from "../../assets/images/green2.png";
import green3 from "../../assets/images/green3.png";
import starsvg from "../../assets/images/starsvg.png";
import svg1 from "../../assets/images/svg1.png";
import rightArrow from "../../assets/images/rightArrow.png";

export default function ExploreCollection() {
  return (
    <>
      <div className="exploreCollectionParent">
        <div className="EXTextArea">
          <p>Explore Our Collections</p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "52px", columnGap: "14px" }}
          >
            <div className="svgStyling">
              <img src={svg1} alt="avg1" height="103px" width="2px" />
              <img src={starsvg} alt="avg1" height="40px" width="40px" />
              <img src={svg1} alt="avg1" height="103px" width="2px" />
            </div>
            <p className="cornerPlotsClass">Corner Plots</p>
          </div>
        </div>
        <img src={green1} alt="green1" />
        <img src={green2} alt="green1" />
        <img src={green3} alt="green1" />
      </div>
      <div style={{float: "right", marginTop:"30px"}}>
        <img src={rightArrow} alt="" />
        <span className="exploreMore">Explore More</span>
      </div>
    </>
  );
}
