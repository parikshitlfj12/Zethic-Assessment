import React from "react";
import starSVG from "../../assets/images/Star.png";
import DropDownButton from "../../CustomLibrary/DropDownButton/DropDownButton";
import Button from "../../CustomLibrary/Button/Button";
import "./Discover.css"

export default function Discover() {
  return (
    <div className="plotClass">
      <div className="discoverImageClass"></div>

      <div className="discoverClass">
        <div className="discoverTextClass">
          Discover Your Perfect <br />
          Plot of Land
        </div>

        <div className="startingAtOuterClass">
          <div className="startingAtTextClassOuterContainer">
            <p className="startingAtTextClass">Starting at</p>
            <span className="priceTagClass">₹3999</span>
            <span className="perSqrClass">per.sqft</span>
          </div>
          <img src={starSVG} alt="svg" />
        </div>

        <div className="inputSearchClass">
          <input
            placeholder="Search area or location"
            className="inputBoxClass"
          />
          <DropDownButton label="₹Budget" />
          <Button label={"Search"} />
        </div>
      </div>
    </div>
  );
}
