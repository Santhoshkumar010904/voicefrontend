import MeetingCard from "./MeetingCard";

function EventsList() {

  const meetings = [
    {
      title: "UI Team Meeting",
      time: "10:00 AM",
    },

    {
      title: "Client Presentation",
      time: "1:30 PM",
    },

    {
      title: "Development Sprint",
      time: "4:00 PM",
    },
  ];

  return (
    <div className="calendar-widget">

      <h2 className="widget-title">
        Events & Meetings
      </h2>

      <div className="meetings-list">

        {
          meetings.map((meeting, index) => (
            <MeetingCard
              key={index}
              title={meeting.title}
              time={meeting.time}
            />
          ))
        }

      </div>

    </div>
  );
}

export default EventsList;