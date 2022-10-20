import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        {/* style can only take objects {}. 
        for css names with a dash e.g. bg-color, 
        it needs to be in quotes '' or cammel case*/}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
