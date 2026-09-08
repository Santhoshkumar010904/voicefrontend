function ReminderPanel() {

  const reminders = [
    "Submit weekly report",
    "Attend HR meeting",
    "Project deadline tomorrow",
    "Team sync at 5 PM",
  ];

  return (
    <div className="calendar-widget">

      <h2 className="widget-title">
        Reminders
      </h2>

      <div className="reminder-list">

        {
          reminders.map((reminder, index) => (
            <div
              className="reminder-item"
              key={index}
            >
              {reminder}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default ReminderPanel;