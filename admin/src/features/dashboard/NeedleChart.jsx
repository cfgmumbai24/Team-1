/* eslint-disable no-shadow */
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const RADIAN = Math.PI / 180;
const data = Array.from({ length: 100 }, (_, i) => ({ name: `${i + 1}%`, value: 1 }));
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const needle = (value, data, cx, cy, iR, oR, color) => {
  const total = data.length;
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
  ];
};

const NeedleChart = () => (
  <PieChart width={300} height={300}>
    <Legend content={<CustomLegend percentage={85} />} />
    <Pie
      dataKey="value"
      startAngle={180}
      endAngle={0}
      data={data}
      cx={cx}
      cy={cy}
      innerRadius={iR}
      outerRadius={oR}
      stroke="none"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={index < 75 ? '#f95656' : '#46a2f9'} stroke='none' />
      ))}
    </Pie>
    {needle(85, data, cx, cy, iR, oR, "var(--color-brand-700)")} {/* Pass the percentage value you want for the needle */}
  </PieChart>
);

export default NeedleChart;

const CustomLegend = ({ percentage }) => (
  <div style={{ display: 'flex', marginTop: '-7rem', alignItems: 'center', justifyContent: 'space-between', height: '10px', padding: 14 }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', justifyContent: 'center' }}>
      <div style={{ width: '12px', height: '12px', backgroundColor: '#f95656', marginRight: '5px' }}></div>
      <span>Minimum</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-10px' }}>
      <div style={{ width: '12px', height: '12px', backgroundColor: '#46a2f9', marginRight: '5px' }}></div>
      <span>Good to have</span>
    </div>
  </div>
);
