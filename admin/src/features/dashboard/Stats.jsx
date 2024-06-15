import React from 'react';
import { FaCalendarPlus, FaCircleCheck } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { ImLab } from "react-icons/im";

function Stats() {
  return (
    <div className="col-span-9 grid grid-cols-4 p-6 graph-bg rounded-md gap-4 ">
      <Stat heading='Users added this month' twcolor="bg-yellow-300" number={789}><GiTeacher color="var(--color-grey-50)" size={'45%'} /></Stat>
      <Stat heading='Total users' twcolor="bg-blue-300" number={630}><FaCircleCheck color="var(--color-grey-50)" size={'45%'} /></Stat>
      <Stat heading='Forum engagement' twcolor="bg-green-300" number={420}><ImLab color="var(--color-grey-50)" size={'45%'} /></Stat>
      <Stat heading='Total video content' twcolor="bg-red-300" number={370}><FaCircleCheck color="var(--color-grey-50)" size={'45%'} /></Stat>
    </div>
  );
}

function Stat({ children, heading, twcolor, number }) {
  return (
    <div className="col-span-1 graph-bg-stats rounded-md flex flex-col items-center justify-center gap-4">
      <span className="text-center ubuntu-regular">{heading}</span>
      <div className={`${twcolor} h-[50%] w-[45%] rounded-full flex justify-center items-center`}>
        {children}
      </div>
      <span className="ubuntu-bold text-6xl">{number}</span>
    </div>
  );
}

export default Stats;
