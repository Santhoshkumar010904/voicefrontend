import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WeeklyReportChart() {

  const data = [
    { day: "Mon", reports: 12 },
    { day: "Tue", reports: 18 },
    { day: "Wed", reports: 10 },
    { day: "Thu", reports: 22 },
    { day: "Fri", reports: 28 },
  ];

  return (
    <div className="analytics-widget">

      <h2 className="widget-title">
        Weekly Reports
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="reports"
            fill="#8b5cf6"
            radius={[10,10,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default WeeklyReportChart;