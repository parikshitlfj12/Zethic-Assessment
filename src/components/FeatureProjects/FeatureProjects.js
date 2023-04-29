import React from "react";
import "./FeatureProjects.css";
import BadgeComponent from "../../CustomLibrary/BadgeComponent/BadgeComponent";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import green4 from "../../assets/images/green4.png";
import green5 from "../../assets/images/green5.png";
import green6 from "../../assets/images/green6.png";
import green7 from "../../assets/images/green7.png";
import CardComponent from "../../CustomLibrary/CardComponent/CardComponent";

const BADGES_LABEL = [
  { label: "Egmore", isSelected: true },
  { label: "Koyambedu", isSelected: false },
  { label: "Sholinganallur", isSelected: false },
  { label: "Choolaimedu", isSelected: false },
  { label: "Greams Road", isSelected: false },
  { label: "Royapettah", isSelected: false },
];

const CARDS_DATA = [
  {
    image: green4,
    BottomComponent: (
      <div>
        <p className="cardSubtextClass">
          Loreum ispum is the dummmy text used to fill the.
        </p>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <p className="priceClass">$16,471</p>
          <p className="sqftClass">2088 sqft</p>
        </div>
      </div>
    ),
  },
  {
    image: green5,
    BottomComponent: (
      <div>
        <p className="cardSubtextClass">
          Loreum ispum is the dummmy text used to fill the.
        </p>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <p className="priceClass">$16,471</p>
          <p className="sqftClass">2088 sqft</p>
        </div>
      </div>
    ),
  },
  {
    image: green6,
    BottomComponent: (
      <div>
        <p className="cardSubtextClass">
          Loreum ispum is the dummmy text used to fill the.
        </p>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <p className="priceClass">$16,471</p>
          <p className="sqftClass">2088 sqft</p>
        </div>
      </div>
    ),
  },
  {
    image: green7,
    BottomComponent: (
      <div>
        <p className="cardSubtextClass">
          Loreum ispum is the dummmy text used to fill the.
        </p>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <p className="priceClass">$16,471</p>
          <p className="sqftClass">2088 sqft</p>
        </div>
      </div>
    ),
  },
];

export default function FeatureProjects() {
  return (
    <div className="featureProjectsParent">
      <p className="featureProjectsHeading">Feature Projects</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "74px",
        }}
      >
        <div className="badgeParentClass">
          {BADGES_LABEL.map((item) => {
            return (
              <BadgeComponent label={item.label} isSelected={item.isSelected} />
            );
          })}
        </div>
        <div>
          <img src={left} alt="" style={{ marginRight: "60px" }} />
          <img src={right} alt="" />
        </div>
      </div>
      <div className="cardsParentComponent">
        {CARDS_DATA.map((data) => {
          return (
            <CardComponent
              image={data.image}
              BottomComponent={data.BottomComponent}
            />
          );
        })}
      </div>
    </div>
  );
}
