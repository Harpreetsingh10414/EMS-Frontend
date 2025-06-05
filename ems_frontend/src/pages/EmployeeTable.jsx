import React from 'react';

const employees = [
  {
    id: 'EMP001',
    name: 'Ankit Pundhir',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    number:'564546454',
    attendance: 'Present',
    leaves: '2',
    projAssigned:'Update on a Dashoard Ui',
    status:'Pending'
  },
  {
    id: 'EMP002',
    name: 'Kumar Kartikey Chaurasiya',
    role: 'Senior Pocha wale',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    attendance: 'Absent',
    leaves: '1',
     projAssigned:'Connectivity for frontend& backend',
     number:'454565654645',
     status:'Pending'
  },
  {
    id: 'EMP003',
    name: 'Tushar Pulani',
    role: 'Database Manager',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    attendance: 'Present',
    leaves: '07',
    projAssigned:'backend fetching',
     number:'44561511141',
     status:'Done'
  },
  {
    id: 'EMP004',
    name: 'Aniket Kasana',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    attendance: 'Present',
    leaves: '2',
    projAssigned:'backend fadna hai',
     number:'11145454541',
     status:'Pendind'
  },
  {
    id: 'EMP005',
    name: 'Harpreet Singh',
    role: 'Senior Developer',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    attendance: 'Present',
    leaves: '2',
     projAssigned:'project status',
     number:'56515151165',
     status:'Done'
  },
  {
    id: 'EMP006',
    name: 'Abhishek Kumar',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    attendance: 'Present',
    leaves: '2',
    projAssigned:'Animations adding',
     number:'565988881165',
     status: 'Pending'
  },
  {
    id: 'EMP007',
    name: 'Rohit Verma',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    attendance: 'Present',
    leaves: '2',
    projAssigned:'working on git',
     number:'9954545115',
     status:'Done'
  },
  {
    id: 'EMP008',
    name: 'Harshpreet Singh',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    attendance: 'Present',
    leaves: '2',
    projAssigned:'Mac to window switch',
     number:'9654515151',
     status:'Pending'
  },
   {
    id: 'EMP009',
    name: 'Nikhil Kasana',
    role: 'Senior Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    attendance: 'Absent',
    leaves: '5',
    projAssigned:'Creating Api',
     number:'9654515151',
     status:'Done'
  },
];


const EmployeeTable = () => {
  return (
    <div className="p-2 sm:p-6 lg:p-8">
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md animate-fade-in">
        <table className="max-w-full divide-y divide-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Image</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Employee ID</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Role</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Attendance</th>
               <th className="px-6 py-4 text-left font-semibold text-gray-700">Total Leaves</th>
               <th className="px-6 py-4 text-left font-semibold text-gray-700">Phone Number</th>
               <th className="px-6 py-4 text-left font-semibold text-gray-700">Task Assign</th>
               <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800 font-bold">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-300  transition duration-300 ease-in-out">
                <td className="px-6 py-4">
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-7 py-4">{emp.name}</td>
                <td className="px-7 py-4">{emp.id}</td>
                <td className="px-2 py-4">{emp.role}</td>
                <td className='px-4 py-4'>
                    <span
                    className={`px-3 py-2 rounded-full text-white text-xs font-bold ${
                      emp.attendance.toLowerCase() === 'present' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {emp.attendance}
                  </span>
                </td>
                <td className='px-7 py-4'>{emp.leaves}</td>
                 <td className='px-7 py-4'>{emp.number}</td>
                  <td className='px-7 py-4'>{emp.projAssigned}</td>
                   <td className='px-7 py-4'>
                    <span className={`${emp.status.toLowerCase() == 'done' ? 'text-green-500' : 'text-yellow-500'}`}>{emp.status}</span>
                   </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
