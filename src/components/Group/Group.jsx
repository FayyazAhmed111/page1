/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Frame } from "../Frame";
import "./style.css";

export const Group = ({
  className,
  vector = "https://generation-sessions.s3.amazonaws.com/8c189981f68c09c9b0ed9a1c3e76f528/img/vector-48.svg",
}) => {
  return (
    <div className={`group ${className}`}>
      <div className="div">
        <div className="frame-2">
          <div className="vector-wrapper">
            <img className="vector" alt="Vector" src={vector} />
          </div>
          <div className="influcio">Influcio</div>
        </div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper">Home</div>
            <div className="text-wrapper">About</div>
            <div className="careers">Careers</div>
          </div>
          <Frame className="frame-1" signUpClassName="frame-instance" text="Get Started" />
        </div>
      </div>
    </div>
  );
};

Group.propTypes = {
  vector: PropTypes.string,
};
