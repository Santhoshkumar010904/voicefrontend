import AdminLayout from "../../components/layout/AdminLayout";

import CalendarView from "../../components/calendar/CalendarView";

import EventsList from "../../components/calendar/EventsList";

import ReminderPanel from "../../components/calendar/ReminderPanel";

function Calendar() {
  return (
    <AdminLayout>

      <div className="calendar-container">

        <div className="calendar-header">

          <div>

            <h1 className="dashboard-title">
              Calendar & Events
            </h1>

            <p className="dashboard-subtitle">
              Company scheduling system
            </p>

          </div>

        </div>

        <div className="calendar-sections">

          <CalendarView />

          <EventsList />

        </div>

        <div className="calendar-sections">

          <ReminderPanel />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Calendar;