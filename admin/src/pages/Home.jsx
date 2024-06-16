import ActiveChart from "../features/dashboard/ActiveChart";
import AttendanceGraph from "../features/dashboard/AttendanceGraph";
import NeedleChart from "../features/dashboard/NeedleChart";
import ProgressGraph from "../features/dashboard/ProgressGraph";
import Stats from "../features/dashboard/Stats";
import './Home.css'

export default function Home() {
  return (
    <div className='container  w-[120%]'>
    <h1 className="font-bold ubuntu-bold text-4xl mb-4 ">DashBoard</h1>
    <div className="top-row grid grid-cols-12 m-2 gap-6">
      <PieChart />
      <Stats />
    </div>

    <AttendanceGraph />
    {/* <ProgressGraph /> */}
    <ActiveChart />
  </div>
  )
}


function PieChart(){
  return(
    <div className="col-span-3 pie-container graph-bg rounded-md">
          <div className="needle-container mt-[-7rem]">
            <NeedleChart />
            <h2 className="text-center ubuntu-regular mt-[-5rem] ">Target</h2>
          </div>
    </div>
  )
}