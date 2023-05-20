import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <div className="Footer">
    <div className="fnav">
      <h5>Nav</h5>
      <p>
        <a href="/home">Home</a>
      </p>
      <p>
        <a href="/about">About</a>
      </p>
      <p>
        <a href="/adventures">Adventures</a>
      </p>
    </div>
    <div className="fcontact">
      <h5 className="fcontacttitle">Contact information</h5>
      <p>T:407-731-6223</p>
      <p>E:Alexanderestrella23@gmail.com</p>
      <p>A:Orlando, Florida</p>
    </div>
    <div className="fsocials">
      <h5 className="Socialmediaheader">Social Media</h5>
      <ul className="fsocialslink">
        <li>
          <SocialIcon url="https://linkedin.com/in/alexanderjestrella" />
        </li>
        <li>
          <SocialIcon url="https://www.facebook.com/alexander.estrellamartinez" />
        </li>
        <li>
          <SocialIcon url="https://github.com/AlexanderEstrella" />
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
