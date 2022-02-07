import React, { PureComponent, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = (props) => {
  const { barRef, chartData } = props;

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          ref={barRef}
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} />
          <Legend />
          <Bar dataKey="attendance" fill="#0a3f88" />
        </BarChart>
      </ResponsiveContainer>
      <div></div>
    </div>
  );
};

export default Graph;
