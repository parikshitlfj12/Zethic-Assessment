import React from "react";
import "./Header.css";
import Button from "../../CustomLibrary/Button/Button";
import DropDownButton from "../../CustomLibrary/DropDownButton/DropDownButton";

export default function Header() {
  return (
    <div className="headerDiv">
      <div className="headerLeftContainer">
        <span>
          Discover
          <br /> Plots
        </span>
      </div>
      <div className="headerRightContainer">
        <DropDownButton
          label="Projects"
          options={[
            "AI chatbot",
            "Weather Forcasting App",
            "Food Delivery App",
            "Telegram bot for stock market",
          ]}
        />
        <div>Agents</div>
        <div style={{borderRight: "1px solid #858585", paddingRight: "30px"}}>Amenities</div>
        <div>SignIn</div>
        <Button label="Schedule a Call" />
      </div>
    </div>
  );
}
