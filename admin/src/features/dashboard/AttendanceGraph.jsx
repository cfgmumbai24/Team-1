
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AttendanceGraph.css'


const data = [
    {
        name: 'January',
        Prev_Year: 75,
        Current_Year: 100,
    },
    {
        name: 'February',
        Prev_Year: 85,
        Current_Year: 110,
    },
    {
        name: 'March',
        Prev_Year: 95,
        Current_Year: 120,
    },
    {
        name: 'April',
        Prev_Year: 105,
        Current_Year: 130,
    },
    {
        name: 'May',
        Prev_Year: 115,
        Current_Year: 140,
    },
    {
        name: 'June',
        Prev_Year: 125,
        Current_Year: 150,
    },
    {
        name: 'July',
        Prev_Year: 135,
        Current_Year: 160,
    },
    {
        name: 'August',
        Prev_Year: 145,
        Current_Year: 170,
    },
    {
        name: 'September',
        Prev_Year: 155,
        Current_Year: 180,
    },
    {
        name: 'October',
        Prev_Year: 165,
        Current_Year: 190,
    },
    {
        name: 'November',
        Prev_Year: 175,
        Current_Year: 200,
    },
    {
        name: 'December',
        Prev_Year: 185,
        Current_Year: 210,
    }
];


export default function AttendanceGraph() {
    return (
        <div className="w-full h-[47vh] mt-8 p-2 rounded-md">
            <div className="graph-bg w-full h-full rounded-md">
                <h2 className='ubuntu-regular m-4'>Users added per month</h2>
                    <ResponsiveContainer width="95%" height="90%" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray={4} />
                            <XAxis dataKey="name" />
                            <YAxis unit={"%"} />
                            <Tooltip contentStyle={{ color: 'gray' }} />
                            <Legend />
                            <Bar dataKey="Prev_Year" fill="#8884d8" activeBar={<Rectangle fill="#82d1f9" stroke="#8884d8" />} />
                            <Bar dataKey="Current_Year" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="#82ca9d" />} />
                        </BarChart>
                    </ResponsiveContainer>
            </div>
        </div>
    )
}