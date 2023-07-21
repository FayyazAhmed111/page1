import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="div-2">
        <div className="overlap-group">
          <img
            className="removal"
            alt="Removal"
            src="https://generation-sessions.s3.amazonaws.com/8c189981f68c09c9b0ed9a1c3e76f528/img/-removal-3.png"
          />
          <h1 className="h-1">INFLUCIO</h1>
          <img
            className="img"
            alt="Removal"
            src="https://generation-sessions.s3.amazonaws.com/8c189981f68c09c9b0ed9a1c3e76f528/img/-removal-1.png"
          />
          <img
            className="removal-2"
            alt="Removal"
            src="https://generation-sessions.s3.amazonaws.com/8c189981f68c09c9b0ed9a1c3e76f528/img/-removal.png"
          />
          <p className="the-ultimate-AI">THE ULTIMATE AI PLATFORM TO CONNECT INFLUENCERS AND BRANDS</p>
          <div className="div-wrapper">
            <div className="text-wrapper-2">I am an Influencer</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-2">I have a Company/Brand</div>
          </div>
        </div>
        <Group
          className="group-1000002672"
          vector="https://generation-sessions.s3.amazonaws.com/8c189981f68c09c9b0ed9a1c3e76f528/img/vector-48-1.svg"
        />
      </div>
    </div>
  );
};
