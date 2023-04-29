import React from "react";
import "./ScheduleComponent.css";
import Vector1 from "../../assets/images/Vector1.png";
import YellowCircle from "../../assets/images/YellowCircle.png";
import Button from "../../CustomLibrary/Button/Button";

export default function ScheduleComponent() {
  return (
    <div className="scheduleComponentParent">
      <div
        style={{
          width: "50%",
        }}
      >
        <p className="CuriousTextClass">
          Curious about our land plot offerings in Chennai? Contact us today
        </p>
        <Button label="Schedule a Call" />
      </div>
      <img
        src={Vector1}
        alt=""
        height="46px"
        width="46px"
        style={{ position: "absolute", left:"10%", top:"15%" }}
      />
      <img
        src={YellowCircle}
        alt=""
        height="75px"
        width="75px"
        style={{ position: "absolute", right:"10%", top: "65%" }}
      />
    </div>
  );
}
