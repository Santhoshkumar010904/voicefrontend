import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AttendanceChart() {

  const data = [
    { month: "Jan", attendance: 92 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 95 },
    { month: "Apr", attendance: 90 },
    { month: "May", attendance: 97 },
  ];

  return (
    <div className="dashboard-widget">

      <h2 className="widget-title">
        Attendance Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="attendance"
            fill="#10b981"
            radius={[10,10,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AttendanceChart;