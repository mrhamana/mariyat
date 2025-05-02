import React from "react";
import "./GlowingAnimation.css";

const GlowingAnimation = () => {
  return (
    <div className="glow-wrapper">
      {[...Array(4)].map((_, i) => (
        <div className="glowing" key={i}>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
      ))}
    </div>
  );
};

export default GlowingAnimation;
