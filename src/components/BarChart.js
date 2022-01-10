import React, { PureComponent, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = props => {
  const barChartData = props.new;

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={barChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} />
          <Legend />
          <Bar dataKey="attendance" fill="#0a3f88" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
