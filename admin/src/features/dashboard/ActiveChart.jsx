import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import styled from "styled-components";
  import DashboardBox from "./DashboardBox";
import { useDarkMode } from "../../contexts/DarkModeContext";
  
  const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1 / -1;
  
    /* Hack to change grid line colors */
    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
      stroke: var(--color-grey-300);
    }
  `;
  
  function ActiveChart() {
    const { isDarkMode } = useDarkMode();
  
    const colors = isDarkMode
      ? {
          totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
          extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
          text: "#e5e7eb",
          background: "#18212f",
        }
      : {
          totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
          extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
          text: "#374151",
          background: "#fff",
        };
  
    // Sample data for demonstration
    const yearlyData = [
      { month: 1, year: 2022, totalUsers: 100 },
      { month: 2, year: 2022, totalUsers: 120 },
      { month: 3, year: 2022, totalUsers: 130 },
      { month: 4, year: 2022, totalUsers: 150 },
      { month: 5, year: 2022, totalUsers: 180 },
      { month: 6, year: 2022, totalUsers: 200 },
      { month: 7, year: 2022, totalUsers: 220 },
      { month: 8, year: 2022, totalUsers: 240 },
      { month: 9, year: 2022, totalUsers: 260 },
      { month: 10, year: 2022, totalUsers: 280 },
      { month: 11, year: 2022, totalUsers: 300 },
      { month: 12, year: 2022, totalUsers: 320 },
      { month: 1, year: 2023, totalUsers: 350 },
      { month: 2, year: 2023, totalUsers: 370 },
      { month: 3, year: 2023, totalUsers: 390 },
      { month: 4, year: 2023, totalUsers: 400 },
      { month: 5, year: 2023, totalUsers: 420 },
      { month: 6, year: 2023, totalUsers: 440 },
      { month: 7, year: 2023, totalUsers: 460 },
      { month: 8, year: 2023, totalUsers: 480 },
      { month: 9, year: 2023, totalUsers: 500 },
      { month: 10, year: 2023, totalUsers: 520 },
      { month: 11, year: 2023, totalUsers: 540 },
      { month: 12, year: 2023, totalUsers: 560 },
    ];
  
    function getMonthName(monthNumber) {
      const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      return months[monthNumber - 1];
    }
  
    // Split data into arrays based on year
    const dataByYear = yearlyData.reduce((acc, item) => {
      const year = item.year;
      const monthName = getMonthName(item.month);
      
      if (!acc[year]) {
        acc[year] = [];
      }
      
      acc[year].push({ ...item, month: monthName });
      
      return acc;
    }, {});
  
    // Convert object to array of arrays
    const arraysByYear = Object.entries(dataByYear).map(([year, data]) => data);
  
    const year1data = arraysByYear[0];
    const year2data = arraysByYear[1];
  
    // Concatenate data from year1 and year2
    const combinedData = year1data.map((entry, index) => ({
      month: entry.month,
      totalUsers1: entry.totalUsers,
      totalUsers2: year2data[index].totalUsers,
    }));
  
    return (
      <>
        <StyledSalesChart>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>Number of Active Users in Previous 2 Years</h2>
          </div>
          <ResponsiveContainer height={300} width="100%">
            <LineChart data={combinedData} >
              <CartesianGrid strokeDasharray={4} />
              <XAxis dataKey="month" tick={{fill: colors.text}} tickLine={{stroke: colors.text}} />
              <YAxis dataKey="totalUsers2" tick={{fill: colors.text, fontSize: 14}} tickLine={{stroke: colors.text}} />
              <Tooltip  contentStyle={{backgroundColor: colors.background}} />
              {/* Line for year 1 data */}
              <Line type="monotone" dataKey="totalUsers1" stroke="#c2410c" strokeWidth={3} name='2022' />
              {/* Line for year 2 data */}
              <Line type="monotone" dataKey="totalUsers2" stroke={colors.extrasSales.stroke}  strokeWidth={3} name='2023' />
              <Legend align="right" verticalAlign="top" />
            </LineChart>
          </ResponsiveContainer>
        </StyledSalesChart>
      </>
    )
  }
  
  export default ActiveChart;
  