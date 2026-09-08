function CalendarView() {

  const dates = [
    "1","2","3","4","5","6","7",
    "8","9","10","11","12","13","14",
    "15","16","17","18","19","20","21",
    "22","23","24","25","26","27","28",
  ];

  return (
    <div className="calendar-widget">

      <h2 className="widget-title">
        Calendar
      </h2>

      <div className="calendar-grid">

        {
          dates.map((date, index) => (
            <div
              className="calendar-date"
              key={index}
            >
              {date}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default CalendarView;