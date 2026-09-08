function EmployeeReportForm() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Submit Report
      </h2>

      <form className="employee-report-form">

        <input
          type="text"
          placeholder="Report Title"
        />

        <textarea
          placeholder="Write your report..."
        ></textarea>

        <button type="submit">
          Submit Report
        </button>

      </form>

    </div>
  );
}

export default EmployeeReportForm;