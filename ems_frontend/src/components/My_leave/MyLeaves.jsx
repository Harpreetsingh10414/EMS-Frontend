import { useEffect, useState } from "react";
// import "./Leave.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyLeaves = () => {
  const [events, setEvents] = useState([]);
  const [internetEvents, setInternetEvents] = useState([]);

  useEffect(() => {
    // Mocked Leave Events
    setEvents([
      {
        title: "Sick Leave",
        start: new Date(2025, 4, 15),
        end: new Date(2025, 4, 17),
        allDay: true,
      },
    ]);

    // Mocked Internet Events
    setInternetEvents([
      { date: "May 20", event: "World Bee Day" },
      { date: "May 25", event: "Geek Pride Day" },
    ]);
  }, []);

  const customDayPropGetter = (date) => {
    const day = date.getDay();
    if (day === 0 || day === 6) {
      return {
        style: {
          backgroundColor: "#e3fcef",
        },
      };
    }
    return {};
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-view">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          dayPropGetter={customDayPropGetter}
        />
      </div>
      <div className="event-sidebar">
        <h3>Events this Month</h3>
        <ul>
          {internetEvents.map((e, idx) => (
            <li key={idx}>
              <strong>{e.date}</strong>: {e.event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyLeaves;
