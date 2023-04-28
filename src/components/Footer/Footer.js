import React from "react";
import "./Footer.css";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";

const FOOTER_OPTIONS = [
  {
    heading: "Who we help",
    subMenus: [{ text: "Customers" }, { text: "Brokers" }, { text: "Lenders" }],
  },
  {
    heading: "Company",
    subMenus: [{ text: "Contact" }],
  },
  {
    heading: "Follow us",
    subMenus: [
      {
        text: "Facebook",
        icon: <img src={Facebook} alt="facebook" width="24px" height="24px" />,
      },
      {
        text: "Instagram",
        icon: (
          <img src={Instagram} alt="instagram" width="24px" height="24px" />
        ),
      },
    ],
  },
];

const Cards = ({ heading = "", subMenus = [] }) => {
  return (
    <div className="cardsParentContainer">
      <p className="cardHeading">{heading}</p>
      {subMenus.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              alignItem: "center",
              columnGap: "12px",
              justifyContent: "flex-start",
            }}
          >
            {item.icon ? <span>{item.icon}</span> : null}
            <span className="subMenuClass">{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <div className="parentFooterContainer">
        <div className="footerHeadingContainer">
          <p className="footerHeadingText">
            Discover <br /> Plots
          </p>
          <p className="footerHeadingSubText">Loreum ispum is the dummy text</p>
        </div>
        <div className="cardsContainer">
          {FOOTER_OPTIONS.map((option) => {
            return (
              <Cards heading={option.heading} subMenus={option.subMenus} />
            );
          })}
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className="copyRightClass">Copyright @ 2023 City Plots</div>
        <div className="privacyLinksClass">
          <a>Privacy Policy . </a>
          <a>Privacy Collection Notice . </a>
          <a>Terms </a>
        </div>
      </div>
    </>
  );
}
