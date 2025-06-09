import "./Leave.css";
export default function All_leave() {
  const today = new Date().toISOString().split("T")[0]; // assuming this is defined somewhere

  const allLeaves = [
    {
      name: "Alice",
      from: "2025-05-15",
      to: "2025-05-16",
      type: "Casual Leave",
    },
    {
      name: "Bob",
      from: today,
      to: today,
      type: "Sick Leave",
    },
    {
      name: "Charlie",
      from: "2025-06-01",
      to: "2025-06-03",
      type: "Annual Leave",
    },
    {
      name: "Diana",
      from: "2025-05-28",
      to: "2025-05-28",
      type: "Sick Leave",
    },
    {
      name: "Ethan",
      from: "2025-06-05",
      to: "2025-06-07",
      type: "Maternity Leave",
    },
    {
      name: "Fatima",
      from: "2025-06-10",
      to: "2025-06-12",
      type: "Casual Leave",
    },
    {
      name: "George",
      from: "2025-05-20",
      to: "2025-05-21",
      type: "Unpaid Leave",
    },
  ];

  const todayLeaves = allLeaves.filter(
    (leave) => leave.from <= today && leave.to >= today
  );

  const upcomingLeaves = allLeaves.filter((leave) => leave.from > today);

  return (
    <div className="w-full  p-4 bg-white rounded shadow-lg text-black">
      <h2 className="text-2xl text-red-500 font-semibold  mb-4">
        Leave Management
      </h2>

      <div>
        <h3 className="text-lg font-bold mb-2">Today’s Leaves</h3>
        <ul className="space-y-2">
          {todayLeaves.map((l, i) => (
            <li key={i} className="bg-red-100 p-2 rounded">
              {l.name} - {l.type}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Upcoming Leaves</h3>
        <ul className="space-y-2">
          {upcomingLeaves.map((l, i) => (
            <li key={i} className="bg-yellow-100 p-2 rounded">
              {l.name}: {l.from} to {l.to} - {l.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
