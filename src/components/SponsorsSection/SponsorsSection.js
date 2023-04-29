import React from "react";
import "./SponsorsSection.css";
import Forbes from "../../assets/images/forbes.png";
import Yahoo from "../../assets/images/yahoo.png";
import MarketWatch from "../../assets/images/marketwatch.png";
import Business from "../../assets/images/business.png";
import TechBullion from "../../assets/images/TechBullion.png";

const LOGOS = [Business, MarketWatch, Forbes, Yahoo, TechBullion];

const SponsersCard = ({ logo }) => {
  return (
    <div>
      <img src={logo} alt="alt" />
    </div>
  );
};

export default function SponsorsSection() {
  return (
    <div className="sponsorsDiv">
      {LOGOS.map((item) => {
        return <SponsersCard logo={item} />;
      })}
    </div>
  );
}
