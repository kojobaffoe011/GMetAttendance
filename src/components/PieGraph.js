import React, { PureComponent, useRef, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const PieGraph = (props) => {
  const { pie_chart_ref, chartData } = props;

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width="100%" height="100%">
          <Pie
            ref={pie_chart_ref}
            dataKey="attendance"
            isAnimationActive={false}
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={300}
            fill="#0a3f88"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PieGraph;
