function EmployeeKPI() {

  const kpis = [
    "Completed 18 tasks this month",
    "Maintained 96% attendance",
    "Improved response time",
    "Exceeded productivity target",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        KPI Overview
      </h2>

      <div className="employee-kpi-list">

        {
          kpis.map((kpi, index) => (
            <div
              className="employee-kpi-item"
              key={index}
            >
              {kpi}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeKPI;