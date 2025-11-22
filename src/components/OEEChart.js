import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function OeePieChart({ availability, performance, quality }) {
  const data = [
    { name: 'Availability', value: Number(availability.toFixed(2)) },
    { name: 'Performance', value: Number(performance.toFixed(2)) },
    { name: 'Quality', value: Number(quality.toFixed(2)) },
  ];

  return (
    <div className="text-center my-3">
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    </div>
  );
}
