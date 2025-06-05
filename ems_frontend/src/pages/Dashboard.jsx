// import React from "react";

// function Dashboard() {
//   return <div className="Dashboard">Dashboard Component</div>;
// }

// export default Dashboard;



import React from 'react'
//import DataCards from './DataCards';
import DataCards from '../pages/DataCards';
import { FaUsers } from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { FaBuilding } from "react-icons/fa";
//import EmployeeTable from './EmployeeTable';
import EmployeeTable from '../pages/EmployeeTable';



const Dashboard = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4  mt-10'>
        <DataCards icon={<FaUsers/>} text="Total IT Employee" number={12} color="bg-teal-600"/>
         <DataCards icon={<FcLeave />} text="Attendance" number={20} color="bg-yellow-500"/>
          <DataCards icon={<FaBuilding />} text="Total Leaves" number={44} color="bg-red-600"/>
           {/* <DataCards icon={<FaBuilding />} text="Total Leaves" number={44} color="bg-red-600"/> */}
      </div>
      <div>
        </div>
      <EmployeeTable/>
    </div>
  )
}

export default Dashboard

