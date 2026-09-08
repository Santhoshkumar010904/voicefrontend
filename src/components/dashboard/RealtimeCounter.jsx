function RealtimeCounter() {
  return (
    <div className="dashboard-widget">

      <h2 className="widget-title">
        Realtime Stats
      </h2>

      <div className="realtime-grid">

        <div className="realtime-card">

          <span>
            Online Users
          </span>

          <h1>
            86
          </h1>

        </div>

        <div className="realtime-card">

          <span>
            Live Tasks
          </span>

          <h1>
            34
          </h1>

        </div>

        <div className="realtime-card">

          <span>
            Meetings
          </span>

          <h1>
            9
          </h1>

        </div>

      </div>

    </div>
  );
}

export default RealtimeCounter;