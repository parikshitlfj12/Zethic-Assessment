import React from "react";
import "./Button.css";

export default function Button({
  label,
  variant = "#FE6D3F",
  textColor = "white",
}) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: variant, color: textColor }}
    >
      {label}
    </button>
  );
}
