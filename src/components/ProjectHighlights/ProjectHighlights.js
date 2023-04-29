import React from "react";
import "./ProjectHighlights.css";
import Building from "../../assets/images/Building.png";
import SquareSVG from "../../assets/images/squareSVG.png";
import Next from "../../assets/images/StylishArrow.png";
import YellowCircle from "../../assets/images/YellowCircle.png";

export default function ProjectHighlights() {
  return (
    <div className="projectHighlightsParent">
      <div className="imageDiv">
        <img src={SquareSVG} alt="" className="svgPositioning" />
        <img src={Building} alt="" />
      </div>
      <div>
        <p className="PHheading">Project Highlights</p>
        <p className="nearToSchoolClass">Near To School</p>
        <p className="loremClass">
          Loreum ispum is the dummy text used to fill the contest and the loreum
          used to fill the content used to fill the content and the loreum.
        </p>
        <p className="nextClass">
          <img
            src={Next}
            alt=""
            style={{ position: "absolute", left: "-100px", top: "-30px" }}
          />
          Next
        </p>
      </div>
        <img src={YellowCircle} alt=""  style={{position:"relative", top: "200px"}}/>
    </div>
  );
}
