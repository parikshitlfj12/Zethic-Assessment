import React from "react";
import "./BadgeComponent.css";

const styles = {
  isSelectedStyle: {
    color: "white",
    background: "#FE6D3F",
  },
  isNotSelectedStyle: {
    border: "1px solid #7C7C7C"
  }
};

export default function BadgeComponent({ label = "", isSelected = false }) {
  return (
    <div
      className="badgeClass"
      style={isSelected ? styles.isSelectedStyle : styles.isNotSelectedStyle}
    >
      {label}
    </div>
  );
}
