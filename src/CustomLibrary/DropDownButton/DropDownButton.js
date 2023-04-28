import React from "react";
import "./DropDownButton.css";

export default function DropDownButton({ label = "", options = [] }) {
  return (
    <div class="dropdown">
      <button class="dropbtn">{label} <i class='fas fa-angle-down' style={{marginLeft: "8px"}}></i> </button>
      <div class="dropdown-content">
        {options.map(option => {
            return (<a>{option}</a>)
        })}
      </div>
    </div>
  );
}
