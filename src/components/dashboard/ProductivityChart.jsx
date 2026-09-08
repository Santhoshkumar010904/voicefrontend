import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProductivityChart() {

  const data = [
    { day: "Mon", productivity: 65 },
    { day: "Tue", productivity: 78 },
    { day: "Wed", productivity: 72 },
    { day: "Thu", productivity: 90 },
    { day: "Fri", productivity: 85 },
    { day: "Sat", productivity: 70 },
  ];

  return (
    <div className="dashboard-widget">

      <h2 className="widget-title">
        Productivity Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="productivity"
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ProductivityChart;