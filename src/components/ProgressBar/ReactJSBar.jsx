import React from "react";
import "./ProgressBar.css";

const ReactJsBar = () => {
  const percentage = 80; // You can dynamically change this value

  const radius = 30; // Radius of the circle
  const stroke = 7; // Stroke width
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Calculating the offset based on percentage

  return (
    <>
    <div className="progress-container">
      <svg className="progress-bar" width="120" height="120">
        <circle
          className="circle-background"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={stroke}
        />
        <circle
          className="circle-progress"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="percentage">{percentage}%</div>
    </div>
    <div className="tech-stack">
    REACT
    </div>
    </>
  );
};

export default ReactJsBar;
