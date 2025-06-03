import "./Leave.css";
export default function All_leave() {
  const today = new Date().toISOString().split("T")[0];

  const allLeaves = [
    {
      name: "Alice",
      from: "2025-05-15",
      to: "2025-05-16",
      type: "Casual Leave",
    },
    { name: "Bob", from: today, to: today, type: "Sick Leave" },
  ];

  const todayLeaves = allLeaves.filter(
    (leave) => leave.from <= today && leave.to >= today
  );

  const upcomingLeaves = allLeaves.filter((leave) => leave.from > today);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Manager Dashboard
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
