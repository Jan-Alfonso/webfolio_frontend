import React from "react";
import "./ProgressBar.css";

const JavaScriptBar = () => {
  const percentage = 70;

  const radius = 30;
  const stroke = 7;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

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
    JS
    </div>
    </>
  );
};

export default JavaScriptBar;
