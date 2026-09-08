function ReportForm() {
  return (
    <div className="report-widget">

      <h2 className="widget-title">
        Create Report
      </h2>

      <form className="report-form">

        <input
          type="text"
          placeholder="Report Title"
        />

        <textarea
          placeholder="Report Description"
        ></textarea>

        <select>
          <option>Daily Report</option>
          <option>Weekly Report</option>
          <option>Productivity Report</option>
        </select>

        <button type="submit">
          Submit Report
        </button>

      </form>

    </div>
  );
}

export default ReportForm;