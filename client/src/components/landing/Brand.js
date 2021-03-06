import React from "react";
import logo from "../../brand-logo.svg";

const Brand = (props) => {
  return (
    <div className="Brand">
      <div className="container">
        <img src={logo} alt="brand-logo" />
        <div className="description">
          Catatan is a free simple note application that lets you manage your
          notes at ease.
        </div>
        <div className="sub-description">
          This app was built using MERN stack.
          <br />
          The codes are available on my github pages.
        </div>
        <div className="social-media">
          <a href="https://www.twitter.com/iqdmsyd" target="blank">
            <img
              src={process.env.PUBLIC_URL + "/twitter-logo.png"}
              alt="twitter"
            />
          </a>
          <a href="https://www.linkedin.com/in/iqdammusayyad" target="blank">
            <img
              src={process.env.PUBLIC_URL + "/linkedin-logo.png"}
              alt="twitter"
            />
          </a>
          <a href="https://www.instagram.com/iqdmsyd" target="blank">
            <img
              src={process.env.PUBLIC_URL + "/instagram-logo.png"}
              alt="twitter"
            />
          </a>
          <a href="https://www.github.com/iqdmsyd" target="blank">
            <img
              src={process.env.PUBLIC_URL + "/github-logo.png"}
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brand;
