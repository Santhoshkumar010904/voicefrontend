function WorkStatusBoard() {
  return (
    <div className="monitor-widget">

      <h2 className="widget-title">
        Work Status
      </h2>

      <div className="status-board">

        <div className="status-card working">
          Working
        </div>

        <div className="status-card meeting">
          In Meeting
        </div>

        <div className="status-card break">
          On Break
        </div>

      </div>

    </div>
  );
}

export default WorkStatusBoard;