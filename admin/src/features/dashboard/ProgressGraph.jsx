
import React from 'react';
import { CartesianGrid, Legend, Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useDarkMode } from '../../contexts/DarkModeContext';
import './AttendanceGraph.css';

const data = [
  { "sem": 1, "cgpi": 9.7 },
  { "sem": 2, "cgpi": 9.6 },
  { "sem": 3, "cgpi": 8.9 },
  { "sem": 4, "cgpi": 9.7 },
  { "sem": 5, "cgpi": 9.8 },
  { "sem": 6, "cgpi": 9.3 },
  { "sem": 7, "cgpi": 9.9 },
  { "sem": 8, "cgpi": 7.7 }
];

export default function ProgressGraph() {
  const { isDarkMode } = useDarkMode();
//   const [isPredictions, setIsPredictions] = useState(false);
  const colors = isDarkMode
    ? {
      CGPI: { stroke: "#4f46e5", fill: "#4f46e5" },
      text: "#e5e7eb",
      background: "#18212f",
    }
    : {
      CGPI: { stroke: "#4f46e5", fill: "#c7d2fe" },
      text: "#374151",
      background: "#fff",
    };

  return (
    <div className="w-full h-[47vh] mt-8 p-2 rounded-md">
      <div className="graph-bg w-full h-full rounded-md">
        <h2 className='ubuntu-regular m-4'>Your progress throughout college</h2>
        <ResponsiveContainer height={300} width="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray={4} />
            <XAxis label={{value:"Semester", offset: 20}} dataKey="sem" tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
            <YAxis dataKey="cgpi" tick={{ fill: colors.text, fontSize: 14 }} tickLine={{ stroke: colors.text }} />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            {/* Area for CGPI data */}
            <Area type="monotone" dataKey="cgpi" stroke={colors.CGPI.stroke} fill={colors.CGPI.fill} strokeWidth={3} />
            {/* Render regression line if predictions are enabled */}
            {/* {isPredictions && (
              <Area type="monotone" dataKey="predictedRevenue" stroke={colors.CGPI.stroke} fill={colors.CGPI.fill} dot={false} strokeWidth={3} name='Predictions for 2024' />
            )} */}
            <Legend align="right" verticalAlign="top" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}